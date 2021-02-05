import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, RequestOpts, ReturnData } from '../../../types/types';

export default async (data: { orgId: string; integrationId: string }, opts: RequestOpts = {}): Promise<ReturnData> => {
  const { orgId, integrationId } = data;

  const endpoint = getUrl.deleteCredentials(orgId, integrationId);

  try {
    return await processRequest(endpoint, RequestMethod.DELETE, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
