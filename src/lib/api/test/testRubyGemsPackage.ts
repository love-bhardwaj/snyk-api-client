import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RubyGemTestReqOpts, RequestMethod, ReturnData } from '../../../types/types';

/**
 * POST: Request to test publicly available Ruby package
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/test/rubygems/test-for-issues-in-a-public-gem-by-name-and-version
 * @param opts { queryParams } query params can be passed, check the API docs for acceptable params
 */
export default async (
  data: { gemName: string; version: string },
  opts: RubyGemTestReqOpts = {},
): Promise<ReturnData> => {
  const { gemName, version } = data;

  const endpoint = getUrl.testRubGemPublicPackage(gemName, version, opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
