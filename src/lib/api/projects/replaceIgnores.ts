import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { ReqOpts, ReturnData, RequestMethod } from '../../../types/types';
import { RequestBodyEmpty } from '../../../errors/errors';

export default async (
  data: {
    orgId: string;
    projectId: string;
    ignoreId: string;
  },
  opts: ReqOpts = {},
): Promise<ReturnData> => {
  if (!opts.requestBody || isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const { orgId, projectId, ignoreId } = data;
  const endpoint = getUrl.replaceIgnores(orgId, projectId, ignoreId);

  try {
    return await processRequest(endpoint, RequestMethod.PUT, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
