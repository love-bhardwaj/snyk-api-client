import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, ReqOpts, ReturnData } from '../../../types/types';

export default async (
  data: { orgId: string; integrationId: string; jobId: string },
  opts: ReqOpts = {},
): Promise<ReturnData> => {
  const { orgId, integrationId, jobId } = data;
  const endpoint = getUrl.getImportJobDetails(orgId, integrationId, jobId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
