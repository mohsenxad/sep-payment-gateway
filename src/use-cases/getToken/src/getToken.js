module.exports = function buildGetToken
(
    {
        httpClient,
        SEP_GET_TOKEN_URL
    }
)
    {
        if
        (
            !httpClient
        )
            {
                throw new Error('buildGetToken must have httpClient.');
            }

        if
        (
            !SEP_GET_TOKEN_URL
        )
            {
                throw new Error('buildGetToken must have SEP_GET_TOKEN_URL.');
            }
            

        return async function getToken
        (
            {
                httpClientOptions
            }
        )
            {
                if
                (
                    !httpClientOptions
                )
                    {
                        throw new Error('getToken must have httpClientOptions.');
                    }

                const httpClientResponse = await httpClient(
                    SEP_GET_TOKEN_URL,
                    httpClientOptions
                );
        
                return httpClientResponse;

            }
    }