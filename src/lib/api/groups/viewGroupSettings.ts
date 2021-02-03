import getUrl from '../../utils/getUrl';
import { RequestOpts, ReturnData, RequestMethod } from '../../../types/types';
import processRequest from '../../utils/processRequest';

export default async (groupId: string, opts: RequestOpts = {}) => {
  const endpoint = getUrl.viewGroupSettings(groupId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
