import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReqOptsWithBody, RequestMethod, ReturnData } from '../../../types/types';
import { RequestBodyEmpty } from '../../../errors/errors';
import isObjectEmpty from '../../utils/isObjectEmpty';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/monitor/depgraph/monitor-dep-graph
 * @param opts { requestBody } Request body to send the deph graph for monitoring
 */
export default async (opts: ReqOptsWithBody): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const endpoint = getUrl.monitorDepGraph();

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
