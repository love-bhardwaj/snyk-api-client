import getUrl from '../utils/getUrl';
import processRequest from '../utils/processRequest';
import { RequestOpts, ReturnData, RequestMethod } from '../../types/types';
import { RequestBodyEmpty } from '../../errors/errors';

export default async (
  orgId: string,
  projectId: string,
  ignoreId: string,
  opts: RequestOpts = {},
): Promise<ReturnData> => {
  if (!opts.requestBody) throw new RequestBodyEmpty();

  const endpoint = getUrl.replaceIgnores(orgId, projectId, ignoreId);

  try {
    return await processRequest(endpoint, RequestMethod.PUT, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
