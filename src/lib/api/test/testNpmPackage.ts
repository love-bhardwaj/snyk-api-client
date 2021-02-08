import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { NpmTestReqOpts, RequestMethod, ReturnData } from '../../../types/types';

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
