import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReqOpts, ReturnData, RequestMethod } from '../../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/users/user-details/get-user-details
 * @param data { userId } Snyk user ID for which you want to get the details
 * @param opts Options to override configs such as API token(Optional)
 */
export default async function getUserDetails(data: { userId: string }, opts: ReqOpts = {}): Promise<ReturnData> {
  const { userId } = data;
  const endpoint = getUrl.getUserDetails(userId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
}
