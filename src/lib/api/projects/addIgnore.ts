import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestBodyEmpty } from '../../../errors/errors';
import { ReturnData, RequestMethod, ReqOptsWithBody } from '../../../types/types';

/**
 * POST: Add an ignore for project
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/project-ignores-by-issue/add-ignore
 * @param data { orgId, projectId, issueId } Snyk org ID, project ID and the issue ID for ignore
 * @param opts { requestBody } Request body should have the ignore information
 */
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
  const endpoint = getUrl.addIgnore(orgId, projectId, issueId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
