import getUrl from '../utils/getUrl';
import httpClient from '../utils/httpClient';
import getApiToken from '../utils/getApiToken';
import getRequestId from '../utils/getRequestId';
import { RequestOpts, ReturnData } from '../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/deactivate-an-individual-project/deactivate
 * @param orgId Snyk organization ID under which the project exists
 * @param projectId Snyk project ID which is to be activated
 * @param opts options to override configs such as API token(optional)
 */
export default async function deactivateAProject(
  orgId: string,
  projectId: string,
  opts: RequestOpts = {},
): Promise<ReturnData> {
  const apiToken = getApiToken(opts);

  const client = httpClient(apiToken);

  const endpoint = getUrl.deactivateProject(orgId, projectId);

  let snykRequestId = null;

  try {
    const response = await client.post(endpoint);

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
      if (httpCode == 400) {
        message = 'Bad request, please check API documentation';
      } else if (httpCode == 401) {
        message = 'Invalid token or unauthorized to make the request';
      } else if (httpCode == 404) {
        message = `Org ID: ${orgId} or Project ID: ${projectId} not found!`;
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
