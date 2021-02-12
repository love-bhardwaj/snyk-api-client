import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { ReturnData, PipTestFileReqOpts, RequestMethod } from '../../../types/types';
import { RequestBodyEmpty } from '../../../errors/errors';

/**
 * POST: Request to test a PIP file
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/test/pip/test-requirements.txt-file
 * @param opts { queryParams } query params can be passed, check the API docs for acceptable params
 */
export default async (opts: PipTestFileReqOpts): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const endpoint = getUrl.testPipFile(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
