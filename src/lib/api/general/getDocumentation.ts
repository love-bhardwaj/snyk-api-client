import processRequest from '../../utils/processRequest';
import { ReqOpts, ReturnData, RequestMethod } from '../../../types/types';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/general/the-api-details/general-api-documentation
 * @param opts Options to override configs such as API token(Optional)
 */
export default async function getDocs(opts: ReqOpts = {}): Promise<ReturnData> {
  const endpoint = '';

  try {
    return await processRequest(endpoint, RequestMethod.GET, opts);
  } catch (errRes) {
    return Promise.reject(errRes);
  }
}
