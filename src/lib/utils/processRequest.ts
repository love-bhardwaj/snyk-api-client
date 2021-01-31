import httpClient from '../utils/httpClient';
import getApiToken from '../utils/getApiToken';
import { RequestOpts, ReturnData, RequestMethod } from '../../types/types';
import getRequestId from '../utils/getRequestId';

export default async (endpoint: string, method: RequestMethod, opts: RequestOpts = {}): Promise<ReturnData> => {
  const apiToken = getApiToken(opts);

  const client = httpClient(apiToken);

  let snykRequestId = null,
    response,
    httpCode;

  try {
    switch (method) {
      case RequestMethod.GET:
        response = await client.get(endpoint);
        httpCode = response.statusCode;
        snykRequestId = getRequestId(response.headers);

        return Promise.resolve({
          success: true,
          response: response.body,
          error: null,
          httpCode,
          snykRequestId,
        });
      case RequestMethod.POST:
        if (!opts.requestBody) opts.requestBody = {};
        response = await client.post(endpoint, {
          json: opts.requestBody,
        });
        httpCode = response.statusCode;
        snykRequestId = getRequestId(response.headers);

        return Promise.resolve({
          success: true,
          response: response.body,
          error: null,
          httpCode,
          snykRequestId,
        });
      case RequestMethod.PUT:
        if (!opts.requestBody) opts.requestBody = {};
        response = await client.put(endpoint, {
          json: opts.requestBody,
        });
        httpCode = response.statusCode;
        snykRequestId = getRequestId(response.headers);

        return Promise.resolve({
          success: true,
          response: response.body,
          error: null,
          httpCode,
          snykRequestId,
        });
      case RequestMethod.DELETE:
        if (!opts.requestBody) opts.requestBody = {};
        response = await client.delete(endpoint, {
          json: opts.requestBody,
        });
        httpCode = response.statusCode;
        snykRequestId = getRequestId(response.headers);

        return Promise.resolve({
          success: true,
          response: response.body,
          error: null,
          httpCode,
          snykRequestId,
        });
      default:
        response = await client.get(endpoint);
        httpCode = response.statusCode;
        snykRequestId = getRequestId(response.headers);

        return Promise.resolve({
          success: true,
          response: response.body,
          error: null,
          httpCode,
          snykRequestId,
        });
    }
  } catch (error) {
    if (error.response) {
      const response = error.response;
      const httpCode = response.statusCode || 500;
      const responseBody = response.body || null;
      snykRequestId = getRequestId(response.headers);

      let message: string = "Something wen't wrong";
      if (httpCode == 400) {
        message = 'Bad request, please check API documentation';
      } else if (httpCode == 401) {
        message = 'Invalid token or unauthorized to make the request';
      } else if (httpCode == 404) {
        message = `Request Org ID or Project ID not found!`;
      } else if (httpCode == 500) {
        message = 'Internal server error';
      }

      const err = new Error(message);
      return Promise.reject({
        success: false,
        response: responseBody,
        error: err,
        httpCode,
        snykRequestId,
      });
    }
    return Promise.reject({
      success: false,
      response: null,
      error: error,
      httpCode: 0,
      snykRequestId,
    });
  }
};