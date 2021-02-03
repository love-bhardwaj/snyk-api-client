import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestOpts, ReturnData, RequestMethod } from '../../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/users/user-organization-notification-settings/modify-org-notification-settings
 * @param orgId Snyk organization ID for which you want to modify notification settings
 * @param requestBody Request body
 * @param opts Options to override configs such as API token
 */
export default async function modifyOrgNotificationSettings(
  orgId: string,
  requestBody: any,
  opts: RequestOpts = {},
): Promise<ReturnData> {
  const endpoint = getUrl.modOrgNotiSettings(orgId);

  try {
    return await processRequest(endpoint, RequestMethod.PUT, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
}
