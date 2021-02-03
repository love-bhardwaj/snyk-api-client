import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestOpts, ReturnData, RequestMethod } from '../../../types/types';

export default async (orgId: string, projectId: string, opts: RequestOpts = {}) => {
  const endpoint = getUrl.listAllIgnores(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
