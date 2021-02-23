import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ListMembersReqOpts, RequestMethod, ReturnData } from '../../../types/types';

/**
 * GET: List of members in a Snyk organization
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/organizations/members-in-organization/list-members
 */
export default async (data: { orgId: string }, opts: ListMembersReqOpts = {}): Promise<ReturnData> => {
  const { orgId } = data;
  const endpoint = getUrl.listOrgMembers(orgId, opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
