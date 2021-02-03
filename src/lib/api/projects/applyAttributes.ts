import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestBodyEmpty } from '../../../errors/errors';
import { RequestOpts, RequestMethod, ReturnData } from '../../../types/types';

export default async (orgId: string, projectId: string, opts: RequestOpts = {}): Promise<ReturnData> => {
  if (!opts.requestBody) throw new RequestBodyEmpty();

  const endpoint = getUrl.applyAttributes(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
