import got from 'got';
import { BASE_URL } from '../../config';

export default function getHttpClient(apiToken: string) {
  return got.extend({
    prefixUrl: BASE_URL,
    headers: {
      Authorization: `token ${apiToken}`,
    },
    responseType: 'json',
  });
}
