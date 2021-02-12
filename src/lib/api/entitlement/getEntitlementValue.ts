import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReturnData, ReqOpts, RequestMethod } from '../../../types/types';

/**
 * GET: Entitlement value for a Snyk Org using the entitlement key
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/entitlements/a-specific-entitlement-by-organization/get-an-organization's-entitlement-value
 * @param data { orgId, entitlementKey }: Snyk Org ID for org which you need get the entitlement value and the entitlement key
 * @param opts Options to override configs such as API token(Optional)
 */
export default async (data: { orgId: string; entitlementKey: string }, opts: ReqOpts = {}): Promise<ReturnData> => {
  const { orgId, entitlementKey } = data;
  const endpoint = getUrl.getEntitlementValue(orgId, entitlementKey);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
