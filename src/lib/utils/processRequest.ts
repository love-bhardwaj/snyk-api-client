import httpClient from '../utils/httpClient';
import { ReqOpts, ReturnData, RequestMethod } from '../../types/types';
import getRequestId from '../utils/getRequestId';

export default async (endpoint: string, method: RequestMethod, opts: ReqOpts = {}): Promise<ReturnData> => {
  let snykRequestId = null;
  let response = null;
  let httpCode = null;

  try {
    const client = httpClient(opts);

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
    // TODO: Can distinguish between API and request error
    if (error.response) {
      const response = error.response;
      const httpCode = response.statusCode || 500;
      const responseBody = response.body || null;
      snykRequestId = getRequestId(response.headers);

      let message: string = "Something wen't wrong";
      if (httpCode === 400) {
        message = 'Bad request, please check API documentation';
      } else if (httpCode === 401) {
        message = 'Invalid token or unauthorized to make the request';
      } else if (httpCode === 404) {
        message = `One of the IDs was not found`;
      } else if (httpCode === 500) {
        message = 'Internal server error, please check the error ref';
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
      response,
      error,
      httpCode,
      snykRequestId,
    });
  }
};
