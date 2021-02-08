import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { MavenTestReqOpts, RequestMethod, ReturnData } from '../../../types/types';

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
