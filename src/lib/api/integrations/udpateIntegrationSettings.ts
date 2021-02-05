import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, RequestOpts, ReturnData } from '../../../types/types';
import { RequestBodyEmpty } from 'errors/errors';

export default async (data: { orgId: string; integrationId: string }, opts: RequestOpts = {}): Promise<ReturnData> => {
  if (!opts.requestBody) throw new RequestBodyEmpty();
  const { orgId, integrationId } = data;

  const endpoint = getUrl.updateIntegrationSettings(orgId, integrationId);

  try {
    return await processRequest(endpoint, RequestMethod.PUT, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
