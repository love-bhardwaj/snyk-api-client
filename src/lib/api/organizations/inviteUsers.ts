import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { ReqOptsWithBody, RequestMethod, ReturnData } from '../../../types/types';
import { RequestBodyEmpty } from '../../../errors/errors';

/**
 * POST: Invite users to Snyk organization
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/organizations/user-invitation-to-organization/invite-users
 */
export default async (data: { orgId: string }, opts: ReqOptsWithBody): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const { orgId } = data;
  const endpoint = getUrl.inviteUserToOrg(orgId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
