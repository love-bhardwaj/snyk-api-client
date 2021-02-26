import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { ReturnData, RequestMethod, ReqOptsWithBody } from '../../../types/types';
import { RequestBodyEmpty } from '../../../errors/errors';

/**
 * PUT: Replace an existing ignore for a project
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/project-ignores-by-issue/replace-ignores
 * @param data { orgId, projectId, ignoreId } Snyk org ID, project ID and the issue ID
 * @param opts { requestBody } The ignore information that will replace the existing one
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
  const endpoint = getUrl.replaceIgnores(orgId, projectId, issueId);

  try {
    return await processRequest(endpoint, RequestMethod.PUT, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
