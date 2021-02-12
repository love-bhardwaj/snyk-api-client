import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestMethod, ReturnData, ReqOptsWithBody } from '../../../types/types';
import { RequestBodyEmpty } from '../../../errors/errors';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/integrations/integration-settings/update
 * @param data { orgId, integrationId } Snyk org ID and integration ID
 */
export default async (data: { orgId: string; integrationId: string }, opts: ReqOptsWithBody): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();
  const { orgId, integrationId } = data;
  const endpoint = getUrl.updateIntegrationSettings(orgId, integrationId);

  try {
    return await processRequest(endpoint, RequestMethod.PUT, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
