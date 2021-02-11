import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { GradleTestReqOpts, RequestMethod, ReturnData } from '../../../types/types';

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
