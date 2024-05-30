const buildCreateHttpClientPostInterceptorOptions = require('./src/create-http-client-post-interceptor-options');
const buildHttpClientPostInterceptor= require('./src/http-client-post-interceptor');
const buildGetDefaultHTTPPostMethod = require('./src/get-default-http-post-method');

module.exports = function
(
    {
        SEP_TERMINAL_ID,
        SEP_HOST,
        customizedHTTPPostMethod
    }
)
    {
        const getDefaultHTTPPostMethod = buildGetDefaultHTTPPostMethod();

        const httpClientPost = getDefaultHTTPPostMethod();

        if
        (
            customizedHTTPPostMethod
        )
            {
                httpClientPost = customizedHTTPPostMethod
            }

        const createHttpClientPostInterceptorOptions = buildCreateHttpClientPostInterceptorOptions(SEP_TERMINAL_ID)

        const httpClientPostInterceptor = buildHttpClientPostInterceptor(
            {
                httpClientPost: httpClientPost,
                createHttpClientPostInterceptorOptions: createHttpClientPostInterceptorOptions,
                SEP_HOST: SEP_HOST
            }
        );

        return httpClientPostInterceptor;
    }