import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, ReturnData, LatestIssueCountReqOpts } from '../../../types/types';

/**
 * POST: Request to get the latest issue counts, you can pass query parameters and fitlers(requestBody)
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/reporting-api/latest-issue-counts/get-latest-issue-counts
 * @param opts { queryParams, requestBody } pass the query parameters and the filters
 */
export default async (opts: LatestIssueCountReqOpts): Promise<ReturnData> => {
  const endpoint = getUrl.getLatestIssueCounts(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
