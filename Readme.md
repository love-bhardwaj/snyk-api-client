# API client/helper for [Snyk API](https://snyk.docs.apiary.io/#reference/users/user-details/get-user-details)
This is a simple set of library functions that can be used to consume the Snyk API. You don't have to worry about calling the endpoint yourself and thinking if it's a _GET_ request, _PUT_ request, _POST_ request, etc. That is already configured for you behind the scenes.


## Config

Before using any of the helper functions available, you need to set/export environment variable __SNYK_API_TOKEN__. If you don't set it you can pass the __API token__ when calling each helper function using the optional config object, setting the value of _apiToken_. 
