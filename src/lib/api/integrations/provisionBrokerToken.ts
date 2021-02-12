import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, ReqOpts, ReturnData } from '../../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/integrations/integration-broker-token-provisioning/provision-new-broker-token
 * @param data { orgId, integrationId } Snyk org ID and integration integration ID
 */
export default async (data: { orgId: string; integrationId: string }, opts: ReqOpts = {}): Promise<ReturnData> => {
  const { orgId, integrationId } = data;
  const endpoint = getUrl.provisionBrokerToken(orgId, integrationId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
