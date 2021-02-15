class TokenNotFoundError extends Error {
  constructor() {
    super('Token not set, please set environment variable SNYK_API_TOKEN');
  }
}
export { TokenNotFoundError };

class RequestBodyEmpty extends Error {
  constructor() {
    super('Request body cannot be empty!');
  }
}

export { RequestBodyEmpty };

class UrlNotSetError extends Error {
  constructor() {
    super('API URL not set');
  }
}

export { UrlNotSetError };
