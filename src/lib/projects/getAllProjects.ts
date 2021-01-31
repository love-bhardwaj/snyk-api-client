import getUrl from '../utils/getUrl';
import processRequest from '../utils/processRequest';
import { RequestOpts, ReturnData, RequestMethod } from '../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/all-projects/list-all-projects
 * @param orgId Org ID for which you want to get all projects
 * @param filters Filters that you would like to filter the projects by
 * @param opts Options to override configs such as API token(Optional)
 */
export default async function getAllProjects(orgId: string, filters: any, opts: RequestOpts = {}): Promise<ReturnData> {
  const endpoint = getUrl.getAllProjects(orgId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
}
