import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, RequestOpts, ReturnData } from '../../../types/types';

export default async (data: { orgId: string; integrationId: string }, opts: RequestOpts = {}): Promise<ReturnData> => {
  const { orgId, integrationId } = data;

  const endpoint = getUrl.getIntegrationSettings(orgId, integrationId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
