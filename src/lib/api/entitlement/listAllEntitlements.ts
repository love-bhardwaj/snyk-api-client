import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, ReqOpts, ReturnData } from '../../../types/types';

/**
 * GET: List all the entitilements of an Snyk org
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/entitlements/entitlements-by-organization/list-all-entitlements
 * @param data { orgId } Snyk org ID for which you need to list the entitlements for
 */
export default async (data: { orgId: string }, opts: ReqOpts = {}): Promise<ReturnData> => {
  const { orgId } = data;
  const endpoint = getUrl.listAllEntitlements(orgId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
