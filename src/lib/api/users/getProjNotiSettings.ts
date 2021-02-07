import config from '../../utils/getUrl';
import httpClient from '../../utils/httpClient';
import processRequest from '../../utils/processRequest';
import { ReqOpts, ReturnData, RequestMethod } from '../../../types/types';
import getApiToken from '../../utils/getApiToken';
import getRequestId from '../../utils/getRequestId';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/users/user-project-notification-settings/get-project-notification-settings
 * @param orgId Snyk organization ID under which the project exists
 * @param projectId Snyk project ID
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
