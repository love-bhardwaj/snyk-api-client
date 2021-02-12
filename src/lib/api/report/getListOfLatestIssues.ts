import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReturnData, RequestMethod, ListLatestIssueReqOpts } from '../../../types/types';

/**
 * POST: List of latest issues, accepts query parameters and request body which has the filters
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/reporting-api/latest-issues/get-list-of-latest-issues
 * @param opts { queryParams } Check the docs for the query parameters that can be passed via the URL
 */
export default async (opts: ListLatestIssueReqOpts): Promise<ReturnData> => {
  const endpoint = getUrl.listLatestIssues(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
