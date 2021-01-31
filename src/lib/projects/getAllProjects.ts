import getUrl from '../utils/getUrl';
import httpClient from '../utils/httpClient';
import getApiToken from '../utils/getApiToken';
import { RequestOpts, ReturnData } from '../../types/types';
import getRequestId from '../utils/getRequestId';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/all-projects/list-all-projects
 * @param orgId Org ID for which you want to get all projects
 * @param filters Filters that you would like to filter the projects by
 * @param opts Options to override configs such as API token(Optional)
 */
export default async function getAllProjects(orgId: string, filters: any, opts: RequestOpts = {}): Promise<ReturnData> {
  const apiToken = getApiToken(opts);

  const client = httpClient(apiToken);

  const endpoint = getUrl.getAllProjects(orgId);

  let snykRequestId = null;

  try {
    const response = await client.post(endpoint, {
      json: filters,
    });
    const httpCode = response.statusCode;

    snykRequestId = getRequestId(response.headers);

    return Promise.resolve({
      success: true,
      response: response.body,
      error: null,
      httpCode,
      snykRequestId,
    });
  } catch (error) {
    if (error.response) {
      const response = error.response;
      const httpCode = response.statusCode || 500;
      const responseBody = response.body || null;
      snykRequestId = getRequestId(response.headers);

      let message: string = "Something wen't wrong";
      if (httpCode == 404) {
        message = `Org ID: ${orgId} not found!`;
      } else if (httpCode == 400) {
        message = 'Bad request, please check the documentation';
      } else if (httpCode == 401) {
        message = 'Invalid token or unauthorized to make the request';
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
}
