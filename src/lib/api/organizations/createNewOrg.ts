import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, RequestOpts, ReturnData } from '../../../types/types';
import { RequestBodyEmpty } from '../../../errors/errors';

export default async (opts: RequestOpts = {}): Promise<ReturnData> => {
  if (!opts.requestBody) throw new RequestBodyEmpty();

  const endpoint = getUrl.createNewOrg();

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
