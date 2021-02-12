import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { GradleTestReqOpts, RequestMethod, ReturnData } from '../../../types/types';

/**
 * POST: Request to test a public gradle packages
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/test/gradle/test-for-issues-in-a-public-package-by-group,-name-and-version
 * @param opts { queryParams } query params can be passed, check the API docs for acceptable params
 */
export default async (
  data: { group: string; name: string; version: string },
  opts: GradleTestReqOpts = {},
): Promise<ReturnData> => {
  const { group, name, version } = data;

  const endpoint = getUrl.testGradlePublicPackage(group, name, version, opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
