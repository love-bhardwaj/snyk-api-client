import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, ReturnData, ReqOpts } from '../../../types/types';

/**
 * GET: List all the Jira issues for the project
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/project-jira-issues/list-all-ignores
 * @param data { orgId, projectId } Snyk org ID and project ID
 */
export default async (data: { orgId: string; projectId: string }, opts: ReqOpts = {}): Promise<ReturnData> => {
  const { orgId, projectId } = data;
  const endpoint = getUrl.listAllJiraIssues(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
