import { RequestOpts } from '../../types/types';
import { TokenNotFoundError } from '../../errors/errors';

export default function getApiToken(opts: RequestOpts): string {
  const apiToken = opts.apiToken || process.env.SNYK_API_TOKEN;
  if (!apiToken) throw new TokenNotFoundError();
  return apiToken;
}
