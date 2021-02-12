import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReqOpts, ReturnData, RequestMethod } from '../../../types/types';

/**
 * GET: List all the project for an org
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/all-projects/list-all-projects
 * @param orgId Org ID for which you want to get all projects
 * @param opts Options to override configs such as API token(Optional)
 */
export default async (data: { orgId: string }, opts: ReqOpts = {}): Promise<ReturnData> => {
  const { orgId } = data;
  const endpoint = getUrl.getAllProjects(orgId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
