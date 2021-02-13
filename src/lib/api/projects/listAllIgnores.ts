import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReqOpts, ReturnData, RequestMethod } from '../../../types/types';

/**
 * GET: List all the ignores for a project
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/project-ignores/list-all-ignores
 * @param data { orgId, projectId } The Snyk org ID and project ID
 */
export default async (data: { orgId: string; projectId: string }, opts: ReqOpts = {}): Promise<ReturnData> => {
  const { orgId, projectId } = data;
  const endpoint = getUrl.listAllIgnores(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
