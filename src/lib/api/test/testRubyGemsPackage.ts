import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RubyGemTestReqOpts, RequestMethod, ReturnData } from '../../../types/types';

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
