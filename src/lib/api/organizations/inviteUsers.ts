import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestOpts, RequestMethod, ReturnData } from '../../../types/types';
import { RequestBodyEmpty } from '../../../errors/errors';

export default async (orgId: string, opts: RequestOpts = {}): Promise<ReturnData> => {
  if (!opts.requestBody) throw new RequestBodyEmpty();

  const endpoint = getUrl.inviteUserToOrg(orgId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
