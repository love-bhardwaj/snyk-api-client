import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestBodyEmpty } from '../../../errors/errors';
import { ReturnData, RequestMethod, ReqOptsWithBody } from '../../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/users/user-project-notification-settings/modify-project-notification-settings
 * @param data { orgId, projectId } Snyk organization ID and project ID
 * @param opts { requestBody } Request body
 */
export default async function modifyOrgNotificationSettings(
  data: { orgId: string; projectId: string },
  opts: ReqOptsWithBody,
): Promise<ReturnData> {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();
  const { orgId, projectId } = data;
  const endpoint = getUrl.modProjNotiSettings(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.PUT, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
}
