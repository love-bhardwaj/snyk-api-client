import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReqOpts, RequestMethod, ReturnData } from '../../../types/types';

/**
 * GET: List all the tags in a group
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/groups/list-all-tags-in-a-group
 * @param data { groupId } The Snyk group ID
 */
export default async (data: { groupId: string }, opts: ReqOpts = {}): Promise<ReturnData> => {
  const { groupId } = data;
  const endpoint = getUrl.listAllTagsInGroup(groupId, opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
