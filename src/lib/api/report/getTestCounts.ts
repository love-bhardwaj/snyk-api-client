import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReturnData, RequestMethod, GetTestCountsReqOpts } from '../../../types/types';

export default async (opts: GetTestCountsReqOpts): Promise<ReturnData> => {
  const endpoint = getUrl.getTestCounts(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
