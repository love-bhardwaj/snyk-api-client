import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReturnData, ReqOpts, RequestMethod } from '../../../types/types';

export default async (data: { orgId: string; entitlementKey: string }, opts: ReqOpts = {}): Promise<ReturnData> => {
  const { orgId, entitlementKey } = data;
  const endpoint = getUrl.getEntitlementValue(orgId, entitlementKey);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
