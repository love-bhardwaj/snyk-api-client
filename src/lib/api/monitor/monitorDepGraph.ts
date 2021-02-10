import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReqOptsWithBody, RequestMethod, ReturnData } from '../../../types/types';
import { RequestBodyEmpty } from '../../../errors/errors';
import isObjectEmpty from '../../utils/isObjectEmpty';

export default async (opts: ReqOptsWithBody): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const endpoint = getUrl.monitorDepGraph();

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
