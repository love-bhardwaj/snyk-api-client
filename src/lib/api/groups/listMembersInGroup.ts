import getUrl from '../../utils/getUrl';
import { ReqOpts, ReturnData, RequestMethod } from '../../../types/types';
import processRequest from '../../utils/processRequest';

export default async (data: { groupId: string }, opts: ReqOpts = {}): Promise<ReturnData> => {
  const { groupId } = data;
  const endpoint = getUrl.listMembersInGroup(groupId);

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
