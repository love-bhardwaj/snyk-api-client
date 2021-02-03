import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestBodyEmpty } from '../../../errors/errors';
import { RequestOpts, ReturnData, RequestMethod } from '../../../types/types';

export default async (groupId: string, orgId: string, opts: RequestOpts = {}) => {
  if (!opts.requestBody) throw new RequestBodyEmpty();

  const endpoint = getUrl.addMemberToOrgInGroup(groupId, orgId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
