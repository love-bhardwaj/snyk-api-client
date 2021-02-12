import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, ReqOpts, ReturnData } from '../../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/integrations/integration-authentication/delete-credentials
 * @param data { orgId, integrationId } Snyk org ID and integration ID
 */
export default async (data: { orgId: string; integrationId: string }, opts: ReqOpts = {}): Promise<ReturnData> => {
  const { orgId, integrationId } = data;
  const endpoint = getUrl.deleteCredentials(orgId, integrationId);

  try {
    return await processRequest(endpoint, RequestMethod.DELETE, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
