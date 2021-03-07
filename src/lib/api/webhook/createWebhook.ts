import getUrl from '../../utils/getUrl';
import { CreateWebhookReqOpts, RequestMethod, ReturnData } from '../../../types/types';
import { RequestBodyEmpty } from '../../../errors/errors';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';

export default async (data: { orgId: string }, opts: CreateWebhookReqOpts): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();
  const { orgId } = data;
  const endpoint = getUrl.createWebhook(orgId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
