import getUrl from '../utils/getUrl';
import processRequest from '../utils/processRequest';
import { RequestOpts, ReturnData, RequestMethod } from '../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/users/user-details/get-user-details
 * @param userId Snyk user ID for which you want to get the details
 * @param opts Options to override configs such as API token(Optional)
 */
export default async function getUserDetails(userId: string, opts: RequestOpts = {}): Promise<ReturnData> {
  const endpoint = getUrl.getUserDetails(userId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
}
