import got from 'got';
import { BASE_URL } from './getUrl';

export default function getHttpClient(apiToken: string) {
  return got.extend({
    prefixUrl: BASE_URL,
    headers: {
      Authorization: `token ${apiToken}`,
    },
    responseType: 'json',
  });
}
