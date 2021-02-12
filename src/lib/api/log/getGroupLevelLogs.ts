import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { LogReqOpts, RequestMethod, ReturnData } from '../../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/audit-logs/group-level-audit-logs/get-group-level-audit-logs
 * @param data { groupId } Snyk group ID
 */
export default async (data: { groupId: string }, opts: LogReqOpts = {}): Promise<ReturnData> => {
  const { groupId } = data;
  const endpoint = getUrl.getGroupLevelLogs(groupId, opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
