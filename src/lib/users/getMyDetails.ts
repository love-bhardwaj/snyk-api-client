import getUrl from '../utils/getUrl';
import httpClient from '../utils/httpClient';
import { RequestOpts, ReturnData, RequestMethod } from '../../types/types';
import getApiToken from '../utils/getApiToken';
import getRequestId from '../utils/getRequestId';
import processRequest from '../utils/processRequest';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/users/my-user-details/get-my-details
 * @param opts Options to override configs such as API token(Optional)
 */
export default async function getMyDetails(opts: RequestOpts = {}): Promise<ReturnData> {
  const endpoint = getUrl.getMyDetails;

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
}
