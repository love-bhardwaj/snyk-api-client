import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestBodyEmpty } from '../../../errors/errors';
import { RequestMethod, ReturnData, RequestOpts } from '../../../types/types';

export default async (orgId: string, projectId: string, opts: RequestOpts = {}): Promise<ReturnData> => {
  if (!opts.requestBody) throw new RequestBodyEmpty();

  const endpoint = getUrl.updateProjectSettings(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.PUT, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
