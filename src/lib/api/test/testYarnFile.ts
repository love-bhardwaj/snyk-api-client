import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestBodyEmpty } from '../../../errors/errors';
import { YarnTestReqOpts, RequestMethod, ReturnData } from '../../../types/types';

/**
 * POST: Request to test the contect of Yarn manifest files
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/test/yarn/test-package.json-&-yarn.lock-file
 * @param opts { queryParams } query params can be passed, check the API docs for acceptable params
 */
export default async (opts: YarnTestReqOpts): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const endpoint = getUrl.testYarnFile(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
