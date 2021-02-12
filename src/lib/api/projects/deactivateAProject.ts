import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReqOpts, ReturnData, RequestMethod } from '../../../types/types';

/**
 * POST: Deactivate a Snyk project
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/deactivate-an-individual-project/deactivate
 * @param orgId Snyk organization ID under which the project exists
 * @param projectId Snyk project ID which is to be activated
 * @param opts options to override configs such as API token(optional)
 */
export default async (data: { orgId: string; projectId: string }, opts: ReqOpts = {}): Promise<ReturnData> => {
  const { orgId, projectId } = data;
  const endpoint = getUrl.deactivateProject(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
