import { HttpError } from 'errors/errors';

export interface httpErrorData {
  message: string;
  statusCode: number;
}

export interface ReturnData {
  success: boolean;
  response: any;
  error: HttpError | Error | null;
  httpCode: number;
  snykRequestId: string | null;
}

export interface QueryParameters {
  perPage?: string;
  page?: string;
}

export interface RequestOpts {
  apiToken?: string;
  baseUrl?: string;
  baseApiPath?: string;
  requestBody?: any;
}

export interface ClientOpts {
  apiToken?: string;
  baseUrl?: string;
  baseApiPath?: string;
}

export const enum RequestMethod {
  GET,
  POST,
  PUT,
  DELETE,
}
