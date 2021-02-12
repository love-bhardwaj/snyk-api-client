import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestBodyEmpty } from '../../../errors/errors';
import { ReturnData, RequestMethod, ReqOptsWithBody } from '../../../types/types';
import isObjectEmpty from '../../utils/isObjectEmpty';

/**
 * POST: Create Jira issue against a project
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/project-jira-issues/create-jira-issue
 * @param data { orgId, projectId, issueId } Snyk org ID, project ID and the issue ID for Jira
 * @param opts { requestBody } requestBody that will have Jira data
 */
export default async (
  data: {
    orgId: string;
    projectId: string;
    issueId: string;
  },
  opts: ReqOptsWithBody,
): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const { orgId, projectId, issueId } = data;
  const endpoint = getUrl.createJiraIssue(orgId, projectId, issueId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
