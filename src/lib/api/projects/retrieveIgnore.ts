import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestOpts, ReturnData, RequestMethod } from '../../../types/types';

export default async (
  data: {
    orgId: string;
    projectId: string;
    issueId: string;
  },
  opts: RequestOpts = {},
): Promise<ReturnData> => {
  const { orgId, projectId, issueId } = data;
  const endpoint = getUrl.retrieveIgnore(orgId, projectId, issueId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
