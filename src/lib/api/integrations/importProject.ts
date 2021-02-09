import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestMethod, ReturnData, ReqOptsWithBody } from '../../../types/types';
import { RequestBodyEmpty } from '../../../errors/errors';

export default async (data: { orgId: string; integrationId: string }, opts: ReqOptsWithBody): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const { orgId, integrationId } = data;

  const endpoint = getUrl.importProject(orgId, integrationId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
