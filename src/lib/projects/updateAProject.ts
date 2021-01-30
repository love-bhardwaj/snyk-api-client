import getUrl from '../utils/getUrl';
import httpClient from '../utils/httpClient';
import getApiToken from '../utils/getApiToken';
import { RequestOpts, ReturnData } from '../../types/types';
import getRequestId from '../utils/getRequestId';

/**
 * Docs for API usage: https://snyk.docs.apiary.io/#reference/projects/individual-project/update-a-project
 * @param orgId Organization ID under which project exists
 * @param projectId Project ID
 * @param reqBody Request body
 * @param opts Pass API token in the option to override existing
 */

export default async function updateAProject(orgId: string, projectId: string, reqBody: any, opts: RequestOpts = {}) {}
