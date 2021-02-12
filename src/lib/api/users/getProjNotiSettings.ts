import config from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReqOpts, ReturnData, RequestMethod } from '../../../types/types';

/**
 * GET: Request to fetch a project notification settings
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/users/user-project-notification-settings/get-project-notification-settings
 * @param data { orgId, projectId } orgId Snyk organization ID under which the project exists, Snyk project ID
 * @param opts Options to override configs such as API token(Optional)
 */
export default async function getProjectNotiSettings(
  data: { orgId: string; projectId: string },
  opts: ReqOpts = {},
): Promise<ReturnData> {
  const { orgId, projectId } = data;
  const endpoint = config.getProjNotiSettings(orgId, projectId);
  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
}
