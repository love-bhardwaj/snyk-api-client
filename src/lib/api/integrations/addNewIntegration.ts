import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestBodyEmpty } from '../../../errors/errors';
import { RequestMethod, RequestOpts, ReturnData } from '../../../types/types';

export default async (data: { orgId: string }, opts: RequestOpts = {}): Promise<ReturnData> => {
  if (!opts.requestBody || isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const { orgId } = data;
  const endpoint = getUrl.addNewIntegration(orgId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
