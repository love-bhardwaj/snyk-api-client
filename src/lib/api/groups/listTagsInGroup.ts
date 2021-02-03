import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestOpts, RequestMethod, ReturnData } from '../../../types/types';

export default async (groupId: string, opts: RequestOpts = {}): Promise<ReturnData> => {
  const endpoint = getUrl.listAllJiraIssues(groupId, opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
