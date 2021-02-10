import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { RequestMethod, ReturnData, ListOfIssuesReqOpts } from '../../../types/types';

export default async (opts: ListOfIssuesReqOpts): Promise<ReturnData> => {
  const endpoint = getUrl.listOfIssues(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
