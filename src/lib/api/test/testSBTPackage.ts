import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { SBTTestReqOpts, RequestMethod, ReturnData } from '../../../types/types';

/**
 * POST: Request to test publicly available SBT package
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/test/sbt/test-for-issues-in-a-public-package-by-group-id,-artifact-id-and-version
 * @param opts { queryParams } query params can be passed, check the API docs for acceptable params
 */
export default async (
  data: { groupId: string; artifactId: string; version: string },
  opts: SBTTestReqOpts = {},
): Promise<ReturnData> => {
  const { groupId, artifactId, version } = data;

  const endpoint = getUrl.testSbtPublicPackage(groupId, artifactId, version);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
