import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestBodyEmpty } from '../../../errors/errors';
import { ReturnData, SBTFileTestReqOpts, RequestMethod } from '../../../types/types';

/**
 * POST: Request to test the content of SBT file
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/test/sbt/test-sbt-file
 * @param opts { queryParams } query params can be passed, check the API docs for acceptable params
 */
export default async (opts: SBTFileTestReqOpts): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const endpoint = getUrl.testSbtFile(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
