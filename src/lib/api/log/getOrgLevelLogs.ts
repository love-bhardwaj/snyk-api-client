import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { LogReqOpts, ReturnData, RequestMethod } from '../../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/audit-logs/organization-level-audit-logs/get-organization-level-audit-logs
 * @param data { orgId } Snyk organization ID
 */
export default async (data: { orgId: string }, opts: LogReqOpts = {}): Promise<ReturnData> => {
  const { orgId } = data;
  const endpoint = getUrl.getOrgLevelLogs(orgId, opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
