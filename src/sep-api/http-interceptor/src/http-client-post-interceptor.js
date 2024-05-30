const translateHttpClientPostInterceptorResponse = require('./translate-http-client-post-interceptor-response');

module.exports = function buildHttpClientPostInterceptor
(
    {
        httpClientPost,
        createHttpClientPostInterceptorOptions,
        SEP_HOST
    }
)
    {
        if
        (
            !httpClientPost
        )
            {
                throw new Error('buildHttpClientPostInterceptor must have httpClientPost.');
            }

        if
        (
            !createHttpClientPostInterceptorOptions
        )
            {
                throw new Error('buildHttpClientPostInterceptor must have createHttpClientPostInterceptorOptions.');
            }

        if
        (
            !SEP_HOST
        )
            {
                throw new Error('buildHttpClientPostInterceptor must have SEP_HOST.');
            }

        return async function httpClientPostInterceptor
        (
            {
                path,
                jsonData
            }
        )
            {
                if
                (
                    !path
                )
                    {
                        throw new Error('httpClientPostInterceptor must have path.');
                    }

                if
                (
                    !jsonData
                )
                    {
                        throw new Error('httpClientPostInterceptor must have jsonData.');
                    }


                const { headers, body } = createHttpClientPostInterceptorOptions(
                    {
                        jsonData: jsonData
                    }
                )

                const httpResponse = await httpClientPost(
                    {
                        hostname: SEP_HOST,
                        path: path,
                        headers: headers,
                        body: body
                    }
                );

                const response = await translateHttpClientPostInterceptorResponse(
                    {
                        httpResponse: httpResponse
                    }
                );

                const result = {
                    httpResponseJsonData: response.jsonData,
                    httpResponseHeaders: response.headers
                }

                return result;
            }
    }