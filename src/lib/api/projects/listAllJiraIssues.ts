import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, ReturnData, ReqOpts } from '../../../types/types';

export default async (data: { orgId: string; projectId: string }, opts: ReqOpts = {}): Promise<ReturnData> => {
  const { orgId, projectId } = data;
  const endpoint = getUrl.listAllJiraIssues(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
