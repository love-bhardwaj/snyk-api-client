import getUrl from '../../utils/getUrl';
import { RequestOpts, RequestMethod, ReturnData } from '../../../types/types';
import { RequestBodyEmpty } from '../../../errors/errors';
import processRequest from '../../utils/processRequest';

export default async (groupId: string, opts: RequestOpts = {}): Promise<ReturnData> => {
  if (!opts.requestBody) throw new RequestBodyEmpty();

  const endpoint = getUrl.deleteTagFromGroup(groupId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
