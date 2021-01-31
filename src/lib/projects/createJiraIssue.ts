import getUrl from '../utils/getUrl';
import processRequest from '../utils/processRequest';
import { RequestBodyEmpty } from '../../errors/errors';
import { RequestOpts, ReturnData, RequestMethod } from '../../types/types';

export default async (
  orgId: string,
  projectId: string,
  issueId: string,
  opts: RequestOpts = {},
): Promise<ReturnData> => {
  if (!opts.requestBody) throw new RequestBodyEmpty();

  const endpoint = getUrl.createJiraIssue(orgId, projectId, issueId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
