import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReturnData, RequestMethod, ProjectCountsReqOpts } from '../../../types/types';

/**
 * POST: Request to get the project counts over time
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/reporting-api/project-counts-over-time/get-project-counts
 * @param opts { queryParams, requestBody } pass the query parameters and the filters
 */
export default async (opts: ProjectCountsReqOpts): Promise<ReturnData> => {
  const endpoint = getUrl.getProjectCounts(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
