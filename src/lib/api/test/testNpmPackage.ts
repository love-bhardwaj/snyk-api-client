import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { NpmTestReqOpts, RequestMethod, ReturnData } from '../../../types/types';

/**
 * POST: Request to test a publicly available NPM package
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/test/npm/test-for-issues-in-a-public-package-by-name-and-version
 * @param opts { queryParams } query params can be passed, check the API docs for acceptable params
 */
export default async (
  data: { packageName: string; version: string },
  opts: NpmTestReqOpts = {},
): Promise<ReturnData> => {
  const { packageName, version } = data;
  const endpoint = getUrl.testNpmPublicPackage(packageName, version, opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
