import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestBodyEmpty } from '../../../errors/errors';
import { RequestMethod, ReturnData, ReqOptsWithBody } from '../../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/integrations/integrations/add-new-integration
 * @param data { orId } The Snyk org ID you want to add the integration to
 */
export default async (data: { orgId: string }, opts: ReqOptsWithBody): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const { orgId } = data;
  const endpoint = getUrl.addNewIntegration(orgId);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
