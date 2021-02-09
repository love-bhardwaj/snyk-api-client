import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { ReturnData, RequestMethod, ReqOptsWithBody } from '../../../types/types';
import { RequestBodyEmpty } from '../../../errors/errors';

export default async (data: { orgId: string; integrationId: string }, opts: ReqOptsWithBody): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const { orgId, integrationId } = data;

  const endpoint = getUrl.updateIntegration(orgId, integrationId);

  try {
    return await processRequest(endpoint, RequestMethod.PUT, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
