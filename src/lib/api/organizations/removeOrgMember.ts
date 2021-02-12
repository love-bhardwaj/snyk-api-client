import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReqOpts, RequestMethod, ReturnData } from '../../../types/types';

/**
 * DELETE: Delete a member from Snyk organization
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/organizations/manage-roles-in-organization/remove-a-member-from-the-organization
 */
export default async (data: { orgId: string; userId: string }, opts: ReqOpts = {}): Promise<ReturnData> => {
  const { orgId, userId } = data;
  const endpoint = getUrl.removeMemberFromOrg(orgId, userId);

  try {
    return await processRequest(endpoint, RequestMethod.DELETE, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
