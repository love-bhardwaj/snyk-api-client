import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestBodyEmpty } from '../../../errors/errors';
import { ReqOptsWithBody, RequestMethod, ReturnData } from '../../../types/types';

/**
 * POST: Remove a project tag
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/remove-project-tag/remove-a-tag-from-a-project
 * @param data { orgId, projectId} Snyk org ID and project ID
 * @param opts { requestBody } Information for the tag to be removed
 */
export default async (data: { orgId: string; projectId: string }, opts: ReqOptsWithBody): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const { orgId, projectId } = data;
  const endpoint = getUrl.removeTag(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
