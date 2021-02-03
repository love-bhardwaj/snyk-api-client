import ClientSettings from '../config/clientSettings';
import { RequestOpts } from '../../types/types';
import { UrlNotSetError } from '../../errors/errors';

export default function getApiUrl(opts: RequestOpts) {
  let baseUrl, baseApiPath;
  baseUrl = opts.baseUrl || ClientSettings.getBaseUrl();
  baseApiPath = opts.baseApiPath || ClientSettings.getBaseApiPath();
  const url = `${baseUrl}${baseApiPath}`;
  if (!url) throw new UrlNotSetError();
  return url;
}
