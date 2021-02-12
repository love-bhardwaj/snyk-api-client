import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReturnData, RequestMethod, GetTestCountsReqOpts } from '../../../types/types';

/**
 * POST: Request to get the test counts
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/reporting-api/test-counts/get-test-counts
 * @param opts { queryParams, requestBody } pass the query parameters and the filters
 */
export default async (opts: GetTestCountsReqOpts): Promise<ReturnData> => {
  const endpoint = getUrl.getTestCounts(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
