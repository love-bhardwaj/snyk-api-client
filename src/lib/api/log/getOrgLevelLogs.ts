import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { LogReqOpts, ReturnData, RequestMethod } from '../../../types/types';

export default async (data: { orgId: string }, opts: LogReqOpts = {}): Promise<ReturnData> => {
  const { orgId } = data;
  const endpoint = getUrl.getOrgLevelLogs(orgId, opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
