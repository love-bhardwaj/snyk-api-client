import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, RequestOpts, ReturnData } from '../../../types/types';

export default async (data: { orgId: string; type: string }, opts: RequestOpts = {}): Promise<ReturnData> => {
  const { orgId, type } = data;

  const endpoint = getUrl.getIntegrationByType(orgId, type);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
