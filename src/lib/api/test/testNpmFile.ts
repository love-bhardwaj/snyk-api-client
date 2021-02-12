import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { NpmFileTestReqOpts, RequestMethod, ReturnData } from '../../../types/types';
import { RequestBodyEmpty } from '../../../errors/errors';

/**
 * POST: Request to test the contenct of NPM manifets files
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/test/npm/test-package.json-&-package-lock.json-file
 * @param opts { queryParams } query params can be passed, check the API docs for acceptable params
 */
export default async (opts: NpmFileTestReqOpts): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const endpoint = getUrl.testNpmFile(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
