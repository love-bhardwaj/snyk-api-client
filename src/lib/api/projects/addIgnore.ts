import getUrl from '../../utils/getUrl';
import { RequestBodyEmpty } from '../../../errors/errors';
import { RequestOpts, ReturnData, RequestMethod } from '../../../types/types';
import processRequest from '../../utils/processRequest';

export default async (
  orgId: string,
  projectId: string,
  issueId: string,
  opts: RequestOpts = {},
): Promise<ReturnData> => {
  if (!opts.requestBody) throw new RequestBodyEmpty();

  const endpoint = getUrl.addIgnore(orgId, projectId, issueId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
