import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestBodyEmpty } from '../../../errors/errors';
import { ComposerFileTestReqOpts, RequestMethod, ReturnData } from '../../../types/types';

/**
 * POST: Request to test a composer file
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/test/composer/test-composer.json-&-composer.lock-file
 * @param opts { queryParams } query params can be passed, check the API docs for acceptable params
 */
export default async (opts: ComposerFileTestReqOpts): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();
  const endpoint = getUrl.testComposerPublicPackage(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
