import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReqOpts, ReturnData, RequestMethod } from '../../../types/types';

/**
 * GET: Sinlge Snyk project information
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/individual-project/retrieve-a-single-project
 * @param data { orgId, projectId } Snyk org ID and project ID
 * @param opts Options to override configs such as API token(optional)
 */
export default async (
  data: {
    orgId: string;
    projectId: string;
  },
  opts: ReqOpts = {},
): Promise<ReturnData> => {
  const { orgId, projectId } = data;
  const endpoint = getUrl.getSingleProject(orgId, projectId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
