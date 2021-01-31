import getUrl from '../utils/getUrl';
import { RequestOpts, ReturnData, RequestMethod } from '../../types/types';
import processRequest from '../utils/processRequest';

export default async (
  orgId: string,
  projectId: string,
  issueId: string,
  opts: RequestOpts = {},
): Promise<ReturnData> => {
  const endpoint = getUrl.retrieveIgnore(orgId, projectId, issueId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
