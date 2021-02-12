import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReqOpts, ReturnData, RequestMethod } from '../../../types/types';

/**
 * GET: Retrieve a ignore for the project
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/project-ignores-by-issue/retrieve-ignore
 * @param data { orgId, projectId, issueId } Snyk org ID, project ID and issue ID
 */
export default async (
  data: {
    orgId: string;
    projectId: string;
    issueId: string;
  },
  opts: ReqOpts = {},
): Promise<ReturnData> => {
  const { orgId, projectId, issueId } = data;
  const endpoint = getUrl.retrieveIgnore(orgId, projectId, issueId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
