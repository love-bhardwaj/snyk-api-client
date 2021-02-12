import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReturnData, RequestMethod, GetLastestProjectCountsReqOtps } from '../../../types/types';

/**
 * POST: Request to get the latest project counts
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/reporting-api/latest-project-counts/get-latest-project-counts
 * @param opts { requestBody } pass the filters in the request body
 */
export default async (opts: GetLastestProjectCountsReqOtps): Promise<ReturnData> => {
  const endpoint = getUrl.getLatestProjectCounts();

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
