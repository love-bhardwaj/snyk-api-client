import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, RequestOpts, ReturnData } from '../../../types/types';

export default async (orgId: string, projectId: string, opts: RequestOpts = {}) => {
  const endpoint = getUrl.listProjectSettings(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
