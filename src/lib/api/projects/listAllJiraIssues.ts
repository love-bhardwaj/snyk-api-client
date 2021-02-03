import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, ReturnData, RequestOpts } from '../../../types/types';

export default async (orgId: string, projectId: string, opts: RequestOpts = {}): Promise<ReturnData> => {
  const endpoint = getUrl.listAllJiraIssues(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
