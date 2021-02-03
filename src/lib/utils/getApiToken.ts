import ClientSettings from '../config/clientSettings';
import { RequestOpts } from '../../types/types';
import { TokenNotFoundError } from '../../errors/errors';

export default function getApiToken(opts: RequestOpts): string {
  const apiToken = opts.apiToken || ClientSettings.getApiToken();
  if (!apiToken) throw new TokenNotFoundError();
  return apiToken;
}
