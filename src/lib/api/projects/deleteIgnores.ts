import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReqOpts, ReturnData, RequestMethod } from '../../../types/types';

/**
 * DELETE: Delete ignore with the issue ID
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/project-ignores-by-issue/delete-ignores
 * @param data { orgId, projectId, ignoreId } The Snyk org ID, project ID and the issue ID
 */
export default async (
  data: {
    orgId: string;
    projectId: string;
    ignoreId: string;
  },
  opts: ReqOpts = {},
): Promise<ReturnData> => {
  const { orgId, projectId, ignoreId } = data;
  const endpoint = getUrl.deleteIgnore(orgId, projectId, ignoreId);

  try {
    return await processRequest(endpoint, RequestMethod.DELETE, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
