import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestBodyEmpty } from '../../../errors/errors';
import { GopkgTestReqOpts, RequestMethod, ReturnData } from '../../../types/types';

/**
 * POST: Request to check the Gopkg file
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/test/dep/test-gopkg.toml-&-gopkg.lock-file
 * @param opts { queryParams } query params can be passed, check the API docs for acceptable params
 */
export default async (opts: GopkgTestReqOpts): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const endpoint = getUrl.testGopkgFile(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
