import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { MavenFileTestReqOpts, RequestMethod, ReturnData } from '../../../types/types';
import { RequestBodyEmpty } from '../../../errors/errors';

/**
 * POST: Request to the test the contenct of a Maven file
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/test/maven/test-maven-file
 * @param opts { queryParams } query params can be passed, check the API docs for acceptable params
 */
export default async (opts: MavenFileTestReqOpts): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const endpoint = getUrl.testMavenFile(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
