import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestBodyEmpty } from '../../../errors/errors';
import { ReturnData, RequestMethod, ReqOptsWithBody } from '../../../types/types';

/**
 * PUT: Request to modify an Snyk orgs notification settings
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/users/user-organization-notification-settings/modify-org-notification-settings
 * @param orgId Snyk organization ID for which you want to modify notification settings
 * @param opts { requestBody } Request body
 */
export default async function modifyOrgNotificationSettings(
  data: { orgId: string },
  opts: ReqOptsWithBody,
): Promise<ReturnData> {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const { orgId } = data;
  const endpoint = getUrl.modOrgNotiSettings(orgId);

  try {
    return await processRequest(endpoint, RequestMethod.PUT, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
}
