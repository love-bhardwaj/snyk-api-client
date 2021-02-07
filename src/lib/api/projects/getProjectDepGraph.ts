import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestOpts, ReturnData, RequestMethod } from '../../../types/types';

export default async (
  data: {
    orgId: string;
    projectId: string;
  },
  opts: RequestOpts = {},
): Promise<ReturnData> => {
  const { orgId, projectId } = data;
  const endpoint = getUrl.getProjDepGraph(orgId, projectId);
  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
