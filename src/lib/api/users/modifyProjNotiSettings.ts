import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestBodyEmpty } from '../../../errors/errors';
import { RequestOpts, ReturnData, RequestMethod } from '../../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/users/user-project-notification-settings/modify-project-notification-settings
 * @param orgId Snyk organization ID under which the project exists
 * @param projectId Snyk project ID for which you want to change the settings
 * @param requestBody Request body
 * @param opts Options to override configs such as API token(Optional)
 */
export default async function modifyOrgNotificationSettings(
  data: { orgId: string; projectId: string },
  opts: RequestOpts = {},
): Promise<ReturnData> {
  if (!opts.requestBody || isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();
  const { orgId, projectId } = data;
  const endpoint = getUrl.modProjNotiSettings(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.PUT, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
}
