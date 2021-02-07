import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestOpts, RequestMethod, ReturnData } from '../../../types/types';

export default async (data: { orgId: string; userId: string }, opts: RequestOpts = {}): Promise<ReturnData> => {
  const { orgId, userId } = data;
  const endpoint = getUrl.removeMemberFromOrg(orgId, userId);

  try {
    return await processRequest(endpoint, RequestMethod.DELETE, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
