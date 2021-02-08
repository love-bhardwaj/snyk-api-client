import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { SBTTestReqOpts, RequestMethod, ReturnData } from '../../../types/types';

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
