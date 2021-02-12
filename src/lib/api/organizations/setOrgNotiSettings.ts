import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestMethod, ReturnData, ReqOptsWithBody } from '../../../types/types';
import { RequestBodyEmpty } from '../../../errors/errors';

/**
 * PUT: Update the notifications settings of an org
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/organizations/notification-settings/set-notification-settings
 */
export default async (data: { orgId: string }, opts: ReqOptsWithBody): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const { orgId } = data;
  const endpoint = getUrl.setOrgsNotiSettings(orgId);

  try {
    return await processRequest(endpoint, RequestMethod.PUT, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
