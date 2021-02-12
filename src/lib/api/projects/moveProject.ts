import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestBodyEmpty } from '../../../errors/errors';
import { RequestMethod, ReturnData, ReqOptsWithBody } from '../../../types/types';

/**
 * PUT: Move project from on org to another under your Snyk group
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/move-project/move-project-to-a-different-org
 * @param data { orgId, projectId } Snyk org ID and project ID that is to be moved
 * @param opts { requestBody } Request body will have the destination organization information
 */
export default async (data: { orgId: string; projectId: string }, opts: ReqOptsWithBody): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const { orgId, projectId } = data;
  const endpoint = getUrl.moveProject(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.PUT, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
