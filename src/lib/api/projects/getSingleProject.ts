import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestOpts, ReturnData, RequestMethod } from '../../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/individual-project/retrieve-a-single-project
 * @param orgId Org ID for the project
 * @param projectId Project ID
 * @param opts Options to override configs such as API token(optional)
 */
export default async function getSingleProject(
  orgId: string,
  projectId: string,
  opts: RequestOpts = {},
): Promise<ReturnData> {
  const endpoint = getUrl.getSingleProject(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
}
