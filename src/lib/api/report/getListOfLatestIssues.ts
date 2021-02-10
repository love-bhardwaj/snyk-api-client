import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReturnData, RequestMethod, ListLatestIssueReqOpts } from '../../../types/types';

export default async (opts: ListLatestIssueReqOpts): Promise<ReturnData> => {
  const endpoint = getUrl.listLatestIssues(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
