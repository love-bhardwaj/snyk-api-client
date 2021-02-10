import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, ReturnData, LatestIssueCountReqOpts } from '../../../types/types';

export default async (opts: LatestIssueCountReqOpts): Promise<ReturnData> => {
  const endpoint = getUrl.getLatestIssueCounts(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
