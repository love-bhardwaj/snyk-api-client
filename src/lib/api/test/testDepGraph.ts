import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestBodyEmpty } from '../../../errors/errors';
import { TestDepGraphReqOpts, RequestMethod, ReturnData } from '../../../types/types';

/**
 * POST: Request to test the dep graph of your project
 *
 * Docs for API usge: https://snyk.docs.apiary.io/#reference/test/dep-graph/get-latest-project-counts
 * @param opts { queryParams } query params can be passed, check the API docs for acceptable params
 */
export default async (opts: TestDepGraphReqOpts): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const endpoint = getUrl.testDepGraph(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
