import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestOpts, RequestMethod, ReturnData } from '../../../types/types';
import { RequestBodyEmpty } from '../../../errors/errors';

export default async (orgId: string, userId: string, opts: RequestOpts = {}): Promise<ReturnData> => {
  if (!opts.requestBody) throw new RequestBodyEmpty();

  const endpoint = getUrl.updateMemberRole(orgId, userId);

  try {
    return await processRequest(endpoint, RequestMethod.PUT, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
