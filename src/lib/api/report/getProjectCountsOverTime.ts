import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReturnData, RequestMethod, ProjectCountsReqOpts } from '../../../types/types';

export default async (opts: ProjectCountsReqOpts): Promise<ReturnData> => {
  const endpoint = getUrl.getProjectCounts(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
