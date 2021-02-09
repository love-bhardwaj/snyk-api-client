import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReturnData, RequestMethod, ReqOptsWithBody } from '../../../types/types';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestBodyEmpty } from '../../../errors/errors';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/individual-project/update-a-project
 * @param orgId Organization ID under which project exists
 * @param projectId Project ID
 * @param opts Pass API token in the option to override existing(Optional)
 */
export default async (data: { orgId: string; projectId: string }, opts: ReqOptsWithBody): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const { orgId, projectId } = data;
  const endpoint = getUrl.updateProject(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.PUT, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
