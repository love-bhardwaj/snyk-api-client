import getUrl from '../../utils/getUrl';
import { ReqOpts, ReturnData, RequestMethod } from '../../../types/types';
import processRequest from '../../utils/processRequest';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/activate-an-individual-project
 * @param orgId Snyk organization ID under which the project exists
 * @param projectId Snyk project ID which is to be activated
 * @param opts options to override configs such as API token(optional)
 */
export default async (
  data: {
    orgId: string;
    projectId: string;
  },
  opts: ReqOpts = {},
): Promise<ReturnData> => {
  const { orgId, projectId } = data;
  const endpoint = getUrl.activateProject(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
