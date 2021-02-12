import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, ReturnData, ReqOpts } from '../../../types/types';

/**
 * DELETE: Delete the project settings
 * 
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/project-settings/delete-project-settings
 * @param data { orgId, projectId } Snyk org ID, project ID
 */
export default async (data: { orgId: string; projectId: string }, opts: ReqOpts = {}): Promise<ReturnData> => {
  const { orgId, projectId } = data;
  const endpoint = getUrl.deleteProjectSettings(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.DELETE, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
