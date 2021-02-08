import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestBodyEmpty } from '../../../errors/errors';
import { TestDepGraphReqOpts, RequestMethod, ReturnData } from '../../../types/types';

export default async (opts: TestDepGraphReqOpts = {}): Promise<ReturnData> => {
  if (!opts.requestBody || isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const endpoint = getUrl.testDepGraph(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
