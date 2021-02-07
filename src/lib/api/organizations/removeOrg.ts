import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, RequestOpts, ReturnData } from '../../../types/types';

export default async (data: { orgId: string }, opts: RequestOpts = {}): Promise<ReturnData> => {
  const { orgId } = data;
  const endpoint = getUrl.removeOrg(orgId);

  try {
    return await processRequest(endpoint, RequestMethod.DELETE, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
