import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import { ReqOpts, RequestMethod, ReturnData } from '../../../types/types';

export default async (data: { orgId: string; webhookId: string }, opts: ReqOpts): Promise<ReturnData> => {
  const { orgId, webhookId } = data;
  const endpoint = getUrl.deleteWebhook(orgId, webhookId);

  try {
    return await processRequest(endpoint, RequestMethod.DELETE, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
