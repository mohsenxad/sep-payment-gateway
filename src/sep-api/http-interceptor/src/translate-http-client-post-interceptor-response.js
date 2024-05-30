module.exports = async function translateHttpClientPostInterceptorResponse
(
    {
        httpResponse
    }
)
    {
        if
        (
            !httpResponse
        )
            {
                throw new Error('translateHttpClientPostInterceptorResponse must have httpResponse.');
            }
        else if
        (
            !httpResponse.headers
        )
            {
                throw new Error('translateHttpClientPostInterceptorResponse response must have headers.');
            }

        const contentType = httpResponse.headers['content-type'];

        // check if the response is from SEP servers


        if
        (
            contentType.includes('json')
        )
            {
                const jsonData  = JSON.parse(httpResponse.data);

                const headers = httpResponse.headers;

                const result = {
                    headers: headers,
                    jsonData: jsonData
                };

                return result;
            }
        else if
        (
            contentType.includes('text/html')
        )
            {
                const textResponse = httpResponse.data;
                throw new Error(`translateHttpClientPostInterceptorResponse Error | text response | ${textResponse}`);
            }
        else
            {
                throw new Error(`translateHttpClientPostInterceptorResponse Error | unknown content-type response | ${contentType}`);
            }
        
    }