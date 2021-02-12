import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, ReqOpts, ReturnData } from '../../../types/types';

/**
 * DELETE: Delete the Snyk organization
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/organizations/manage-organization/remove-organization
 */
export default async (data: { orgId: string }, opts: ReqOpts = {}): Promise<ReturnData> => {
  const { orgId } = data;
  const endpoint = getUrl.removeOrg(orgId);

  try {
    return await processRequest(endpoint, RequestMethod.DELETE, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
