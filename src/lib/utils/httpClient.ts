import got from 'got';
import { ReqOpts } from '../../types/types';
import getApiToken from './getApiToken';
import getApiUrl from './getApiUrl';

export default function getHttpClient(opts: ReqOpts) {
  // TODO: Should move get API token function call here
  try {
    const apiUrl = getApiUrl(opts);
    const apiToken = getApiToken(opts);

    return got.extend({
      prefixUrl: apiUrl,
      headers: {
        Authorization: `token ${apiToken}`,
        'Content-Type': 'application/json',
      },
      responseType: 'json',
    });
  } catch (error) {
    throw error;
  }
}
