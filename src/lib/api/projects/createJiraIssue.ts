import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestBodyEmpty } from '../../../errors/errors';
import { ReturnData, RequestMethod, ReqOptsWithBody } from '../../../types/types';
import isObjectEmpty from '../../utils/isObjectEmpty';

export default async (
  data: {
    orgId: string;
    projectId: string;
    issueId: string;
  },
  opts: ReqOptsWithBody,
): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const { orgId, projectId, issueId } = data;
  const endpoint = getUrl.createJiraIssue(orgId, projectId, issueId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
