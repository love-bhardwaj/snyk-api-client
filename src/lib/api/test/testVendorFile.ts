import getUrl from '../../utils/getUrl';
import processRequest from '../../utils/processRequest';
import isObjectEmpty from '../../utils/isObjectEmpty';
import { RequestBodyEmpty } from '../../../errors/errors';
import { VendorTestReqOpts, RequestMethod, ReturnData } from '../../../types/types';

/**
 * POST: Request to test the content of vendor.json file
 *
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/test/vendor/test-vendor.json-file
 * @param opts { queryParams } query params can be passed, check the API docs for acceptable params
 */
export default async (opts: VendorTestReqOpts): Promise<ReturnData> => {
  if (isObjectEmpty(opts.requestBody)) throw new RequestBodyEmpty();

  const endpoint = getUrl.testVendorFile(opts.queryParams);

  try {
    return await processRequest(endpoint, RequestMethod.POST, opts);
  } catch (error) {
    return Promise.reject(error);
  }
};
