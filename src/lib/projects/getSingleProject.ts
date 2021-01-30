import config from '../../config';
import httpClient from '../utils/httpClient';
import getApiToken from '../utils/getApiToken';
import { RequestOpts, ReturnData } from '../../types/types';

export default async function getSingleProject(orgId: string, projectId: string, opts: RequestOpts = {}) {
  const apiToken = getApiToken(opts);

  const client = httpClient(apiToken);

  const url = config.url.getSingleProject(orgId, projectId);

  try {
  } catch (error) {}
}
