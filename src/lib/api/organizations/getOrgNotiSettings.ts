import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReqOpts, RequestMethod, ReturnData } from '../../../types/types';

/**
 * GET: Snyk organizations notification settings
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/organizations/notification-settings/get-org-notification-settings
 * @param data { orgId } Snyk org ID for which you require the settigns for
 */
export default async (data: { orgId: string }, opts: ReqOpts = {}): Promise<ReturnData> => {
  const { orgId } = data;
  const endpoint = getUrl.getOrgsNotiSettings(orgId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
