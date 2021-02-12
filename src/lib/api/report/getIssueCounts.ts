import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, ReturnData, GetIssueCountReqOpts } from '../../../types/types';

/**
 * POST: Request will accept query parameters and request body with filters
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/reporting-api/issue-counts-over-time/get-issue-counts
 * @param opts { queryParams, requestBody } pass the query parameters and the filters
 */
export default async (opts: GetIssueCountReqOpts): Promise<ReturnData> => {
  const endpoint = getUrl.getIssueCounts(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
