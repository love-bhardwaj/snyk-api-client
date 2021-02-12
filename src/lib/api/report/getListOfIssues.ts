import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, ReturnData, ListOfIssuesReqOpts } from '../../../types/types';

/**
 * POST: Request to get the list of issues
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/reporting-api/issues/get-list-of-issues
 * @param opts { queryParams, requestBody } pass the query parameters and the filters
 */
export default async (opts: ListOfIssuesReqOpts): Promise<ReturnData> => {
  const endpoint = getUrl.listOfIssues(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
