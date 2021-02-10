import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReturnData, RequestMethod, GetLastestProjectCountsReqOtps } from '../../../types/types';

export default async (opts: GetLastestProjectCountsReqOtps): Promise<ReturnData> => {
  const endpoint = getUrl.getLatestProjectCounts();

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
