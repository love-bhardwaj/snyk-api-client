import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, ReturnData, ListDepsReqOpts } from '../../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/dependencies/dependencies-by-organization/list-all-dependencies
 * @param data { orgId }: Snyk Org ID for org which you need get the dependencies
 * @param opts Options to override configs such as API token(Optional)
 */
export default async (data: { orgId: string }, opts: ListDepsReqOpts = {}): Promise<ReturnData> => {
  const { orgId } = data;
  const endpoint = getUrl.listAllDependencies(orgId, opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
