import { HttpError } from 'errors/errors';

export interface HttpErrorData {
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

export interface ReqOpts {
  apiToken?: string;
  baseUrl?: string;
  baseApiPath?: string;
  requestBody?: any;
  queryParams?: any;
}

export interface ReqOptsWithBody extends ReqOpts {
  requestBody: any;
}

export interface ListDepsQueryParams {
  sortBy?: string;
  order?: string;
  page?: string | number;
  perPage?: string | number;
}

export interface ListDepsReqOpts extends ReqOpts {
  queryParams?: ListDepsQueryParams;
}

export interface ListLicenseQueryParams {
  sortBy?: string;
  order?: string;
}

export interface ListLicenseReqOpts extends ReqOpts {
  queryParams?: ListLicenseQueryParams;
}

export interface MavenTestQueryParams {
  org?: string;
  repository?: string;
}

export interface MavenTestReqOpts extends ReqOpts {
  queryParams?: MavenTestQueryParams;
}
export interface MavenFileTestReqOpts extends MavenTestReqOpts {
  requestBody: object;
}

export interface NpmTestQueryParams {
  org?: string;
}

export interface NpmTestReqOpts extends ReqOpts {
  queryParams?: NpmTestQueryParams;
}

export interface NpmFileTestReqOpts extends NpmTestReqOpts {
  requestBody: object;
}

export interface GopkgTestQueryParams {
  org?: string;
}

export interface GopkgTestReqOpts extends ReqOpts {
  queryParams?: GopkgTestQueryParams;
  requestBody: object;
}

export interface VendorTestQueryParams {
  org?: string;
}

export interface VendorTestReqOpts extends ReqOpts {
  queryParams?: VendorTestQueryParams;
  requestBody: object;
}

export interface YarnTestQueryParams {
  org?: string;
}

export interface YarnTestReqOpts extends ReqOpts {
  queryParams?: YarnTestQueryParams;
  requestBody: object;
}

export interface RubyGemTestQueryParams {
  org?: string;
}

export interface RubyGemTestReqOpts extends ReqOpts {
  queryParams?: RubyGemTestQueryParams;
}

export interface RubyGemFileTestReqOpts extends RubyGemTestReqOpts {
  requestBody: object;
}

export interface GradleTestQueryParams {
  org?: string;
  repository?: string;
}

export interface GradleTestReqOpts extends ReqOpts {
  queryParams?: GradleTestQueryParams;
}
export interface GradleFileTestReqOpts extends GradleTestReqOpts {
  requestBody: object;
}

export interface SBTTestQueryParams {
  org?: string;
  repository?: string;
}

export interface SBTTestReqOpts extends ReqOpts {
  queryParams?: SBTTestQueryParams;
}

export interface SBTFileTestReqOpts extends SBTTestReqOpts {
  requestBody: object;
}

export interface PipTestQueryParams {
  org?: string;
}

export interface PipTestReqOpts extends ReqOpts {
  queryParams?: PipTestQueryParams;
}

export interface PipTestFileReqOpts extends PipTestReqOpts {
  requestBody: object;
}

export interface ComposerQueryParams {
  org?: string;
}

export interface ComposerTestReqOpts extends ReqOpts {
  queryParams?: ComposerQueryParams;
}

export interface ComposerFileTestReqOpts extends ComposerTestReqOpts {
  requestBody: object;
}

export interface TestDepGraphQueryParams {
  org?: string;
}

export interface TestDepGraphReqOpts extends ReqOpts {
  queryParams?: TestDepGraphQueryParams;
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
