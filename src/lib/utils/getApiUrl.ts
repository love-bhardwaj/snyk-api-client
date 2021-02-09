import ClientSettings from '../config/clientSettings';
import { ReqOpts } from '../../types/types';
import { UrlNotSetError } from '../../errors/errors';

export default function getApiUrl(opts: ReqOpts) {
  const baseUrl = opts.baseUrl || ClientSettings.getBaseUrl();
  const baseApiPath = opts.baseApiPath || ClientSettings.getBaseApiPath();
  const url = `${baseUrl}${baseApiPath}`;
  if (!url) throw new UrlNotSetError();
  return url;
}
