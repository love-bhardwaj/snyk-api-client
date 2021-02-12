import getUrl from '../../utils/getUrl';
import { ReqOpts, ReturnData, RequestMethod } from '../../../types/types';
import processRequest from '../../utils/processRequest';

/**
 * POST: Activate a project
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/activate-an-individual-project
 * @param data { orgId, projectId } The Snyk Org ID and Project ID
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
