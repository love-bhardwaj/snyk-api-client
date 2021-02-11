import getUrl from '../../utils/getUrl';
import isObjectEmpty from '../../utils/isObjectEmpty';
import processRequest from '../../utils/processRequest';
import { ReqOptsWithBody, ReturnData, RequestMethod } from '../../../types/types';
import { RequestBodyEmpty } from '../../../errors/errors';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/groups/group-settings/update-group-settings
 * @param data { groupId } The Snyk group ID
 * @param opts { requestBody } The settings you want to udpated
 */
export default async (data: { groupId: string }, opts: ReqOptsWithBody): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const { groupId } = data;
  const endpoint = getUrl.updateGroupSettings(groupId);

  try {
    return await processRequest(endpoint, RequestMethod.PUT, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
};
