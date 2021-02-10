import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, ReturnData, GetIssueCountReqOpts } from '../../../types/types';

export default async (opts: GetIssueCountReqOpts): Promise<ReturnData> => {
  const endpoint = getUrl.getIssueCounts(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
