import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestOpts, RequestMethod, ReturnData } from '../../../types/types';

export default async (opts: RequestOpts = {}): Promise<ReturnData> => {
  const endpoint = getUrl.listOrgs();

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
