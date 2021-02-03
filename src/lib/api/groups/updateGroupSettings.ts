import getUrl from '../../utils/getUrl';
import { RequestOpts, ReturnData, RequestMethod } from '../../../types/types';
import { RequestBodyEmpty } from '../../../errors/errors';
import processRequest from '../../utils/processRequest';

export default async (groupId: string, opts: RequestOpts = {}) => {
  if (!opts.requestBody) throw new RequestBodyEmpty();

  const endpoint = getUrl.updateGroupSettings(groupId);

  try {
    return await processRequest(endpoint, RequestMethod.PUT, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
