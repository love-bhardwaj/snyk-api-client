import { ClientOpts } from '../../types/types';

class ClientConfig {
  private static apiToken: string | undefined = process.env.SNYK_API_TOKEN;
  private static baseUrl: string = 'https://snyk.io';
  private static baseApiPath: string = '/api/v1';

  static set(opts: ClientOpts = {}) {
    if (opts && opts.apiToken) this.apiToken = opts.apiToken;
    if (opts && opts.baseUrl) this.baseUrl = opts.baseUrl;
    if (opts && opts.baseApiPath) this.baseApiPath = opts.baseApiPath;
  }

  static getApiToken() {
    return this.apiToken;
  }

  static getUrl() {
    return `${this.baseUrl}${this.baseApiPath}`;
  }

  static getBaseUrl() {
    return this.baseUrl;
  }

  static getBaseApiPath() {
    return this.baseApiPath;
  }
}

export default ClientConfig;
