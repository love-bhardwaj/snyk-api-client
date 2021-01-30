import { httpErrorData } from '../types/types';

class HttpError extends Error {
  public httpStatusCode: number;
  public responseBody: any;

  constructor(data: httpErrorData) {
    super(data.message);
    this.httpStatusCode = data.statusCode;
  }
}

export { HttpError };

class TokenNotFoundError extends Error {
  constructor() {
    super('Token not set, please set environment variable SNYK_API_TOKEN');
  }
}
export { TokenNotFoundError };
