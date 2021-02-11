import getUrl from '../../utils/getUrl';
import { ReqOpts, ReturnData, RequestMethod } from '../../../types/types';
import processRequest from '../../utils/processRequest';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/groups/list-members-in-a-group/list-all-members-in-a-group
 * @param data { groupId } The Snyk group ID for which you want to list the members for
 */
export default async (data: { groupId: string }, opts: ReqOpts = {}): Promise<ReturnData> => {
  const { groupId } = data;
  const endpoint = getUrl.listMembersInGroup(groupId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
