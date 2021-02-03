import processRequest from '../utils/processRequest';
import { RequestOpts, ReturnData, RequestMethod } from '../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/general/the-api-details/general-api-documentation
 * @param opts Options to override configs such as API token(Optional)
 */
export default async function getDocs(opts: RequestOpts = {}): Promise<ReturnData> {
  const endpoint = '';

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
}
