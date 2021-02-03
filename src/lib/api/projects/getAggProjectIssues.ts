import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestOpts, ReturnData, RequestMethod } from '../../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/aggregated-project-issues/list-all-aggregated-issues
 * @param orgId Snyk organization ID
 * @param projectId Snyk project ID
 * @param opts options to pass data such as request body and API token
 */
export default async function getAggProjectIssues(
  orgId: string,
  projectId: string,
  opts: RequestOpts = {},
): Promise<ReturnData> {
  const endpoint = getUrl.getAggIssues(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
}
