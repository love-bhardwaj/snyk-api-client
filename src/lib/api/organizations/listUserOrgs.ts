import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReqOpts, RequestMethod, ReturnData } from '../../../types/types';

/**
 * GET: List of Snyk organizations user belongs to
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/organizations/the-snyk-organization-for-a-request/list-all-the-organizations-a-user-belongs-to
 */
export default async (opts: ReqOpts = {}): Promise<ReturnData> => {
  const endpoint = getUrl.listOrgs();

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
