import getUrl from '../../utils/getUrl';
import { RequestOpts, ReturnData, RequestMethod } from '../../../types/types';
import processRequest from '../../utils/processRequest';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/deactivate-an-individual-project/deactivate
 * @param orgId Snyk organization ID under which the project exists
 * @param projectId Snyk project ID which is to be activated
 * @param opts options to override configs such as API token(optional)
 */
export default async (orgId: string, projectId: string, opts: RequestOpts = {}): Promise<ReturnData> => {
  const endpoint = getUrl.deactivateProject(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
