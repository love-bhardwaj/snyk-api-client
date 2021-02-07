import ClientSettings from '../config/clientSettings';
import { ReqOpts } from '../../types/types';
import { TokenNotFoundError } from '../../errors/errors';

export default function getApiToken(opts: ReqOpts): string {
  const apiToken = opts.apiToken || ClientSettings.getApiToken();
  if (!apiToken) throw new TokenNotFoundError();
  return apiToken;
}
