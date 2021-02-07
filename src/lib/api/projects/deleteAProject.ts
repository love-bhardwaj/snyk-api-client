import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestOpts, ReturnData, RequestMethod } from '../../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/individual-project/delete-a-project
 * @param orgId Snyk organization ID under which the project exists
 * @param projectId Snyk project ID for the project that is to be deleted
 * @param opts options to override configs such as API token(optional)
 */
export default async (data: { orgId: string; projectId: string }, opts: RequestOpts = {}): Promise<ReturnData> => {
  const { orgId, projectId } = data;
  const endpoint = getUrl.deleteProject(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.DELETE, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
