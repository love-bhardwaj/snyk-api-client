import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReqOpts, ReturnData, RequestMethod } from '../../../types/types';

/**
 * GET: The Snyk project Dependency graph
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/project-dependency-graph/get-project-dependency-graph
 * @param data { orgId, projectId } Snyk org ID and the Snyk project ID
 */
export default async (
  data: {
    orgId: string;
    projectId: string;
  },
  opts: ReqOpts = {},
): Promise<ReturnData> => {
  const { orgId, projectId } = data;
  const endpoint = getUrl.getProjDepGraph(orgId, projectId);
  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
