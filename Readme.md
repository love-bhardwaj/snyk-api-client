# API client/helper for [Snyk API](https://snyk.docs.apiary.io/#reference/users/user-details/get-user-details)
This is a simple set of library functions that can be used to consume the Snyk API. You don't have to worry about calling the endpoint yourself and thinking if it's a _GET_ request, _PUT_ request, _POST_ request, etc. That is already configured for you behind the scenes.

__Note*__: Package is still in development and is not stable


## Config

The client needs to supplied the API token to work. This is required, otherwise a error is thrown. There are two ways to do this:
- You can supply the API token by exporting environment variable SNYK_API_TOKEN
- You can import the ClientConfig and set the API token

```ts
import { ClientConfig } from  "snyk-api-client";

ClientConfig.set({ apiToken:  process.env.TOKEN_SNYK_API });
```
The following settings the can be configure through the ClientConfig are the following:

- apiToken: set to environment variable SNYK_API_TOKEN by default
- baseUrl: set to https://snyk.io by default
- baseApiPath: set to /api/v1 by default