import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestBodyEmpty } from '../../../errors/errors';
import { ReqOptsWithBody, ReturnData, RequestMethod } from '../../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/groups/members-in-an-organization-of-a-group/add-a-member-to-an-organization-within-a-group
 * @param data { orgId, groupId } Snyk Org ID and Group ID required to add member
 * @param opts { requestBody } Required request body check the API documents
 */
export default async (data: { orgId: string; groupId: string }, opts: ReqOptsWithBody): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const { orgId, groupId } = data;
  const endpoint = getUrl.addMemberToOrgInGroup(groupId, orgId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
