import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { MavenTestReqOpts, RequestMethod, ReturnData } from '../../../types/types';

/**
 * POST: Test a public Maven package
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/test/maven/test-for-issues-in-a-public-package-by-group-id,-artifact-id-and-version
 * @param opts { queryParams } query params can be passed, check the API docs for acceptable params
 */
export default async (
  data: { groupId: string; artifactId: string; version: string },
  opts: MavenTestReqOpts = {},
): Promise<ReturnData> => {
  const { groupId, artifactId, version } = data;
  const endpoint = getUrl.mavenTestPublicPackage(groupId, artifactId, version, opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
