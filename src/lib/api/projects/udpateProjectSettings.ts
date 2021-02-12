import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestBodyEmpty } from '../../../errors/errors';
import { RequestMethod, ReturnData, ReqOptsWithBody } from '../../../types/types';

/**
 * PUT: Update the Snyk project settings
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/project-settings/update-project-settings
 * @param data { orgId, projectId } Snyk org ID and the project ID
 */
export default async (data: { orgId: string; projectId: string }, opts: ReqOptsWithBody): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const { orgId, projectId } = data;
  const endpoint = getUrl.updateProjectSettings(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.PUT, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
