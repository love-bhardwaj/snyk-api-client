import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestOpts, ReturnData, RequestMethod } from '../../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/individual-project/update-a-project
 * @param orgId Organization ID under which project exists
 * @param projectId Project ID
 * @param reqBody Request body
 * @param opts Pass API token in the option to override existing(Optional)
 */
export default async function updateAProject(
  orgId: string,
  projectId: string,
  reqBody: any,
  opts: RequestOpts = {},
): Promise<ReturnData> {
  const endpoint = getUrl.updateProject(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.PUT, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
}
