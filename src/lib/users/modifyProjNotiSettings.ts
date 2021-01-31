import getUrl from '../utils/getUrl';
import processRequest from '../utils/processRequest';
import { RequestOpts, ReturnData, RequestMethod } from '../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/users/user-project-notification-settings/modify-project-notification-settings
 * @param orgId Snyk organization ID under which the project exists
 * @param projectId Snyk project ID for which you want to change the settings
 * @param requestBody Request body
 * @param opts Options to override configs such as API token(Optional)
 */
export default async function modifyOrgNotificationSettings(
  orgId: string,
  projectId: string,
  requestBody: any,
  opts: RequestOpts = {},
): Promise<ReturnData> {
  const endpoint = getUrl.modProjNotiSettings(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.PUT, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
}
