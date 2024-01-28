module.exports = function buildGetToken
(
    {
        httpClient,
        createRequest,
        translateResponse,
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
            !createRequest
        )
            {
                throw new Error('buildGetToken must have createRequest.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetToken must have translateResponse.');
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
            getTokenParams
        )
            {
                if
                (
                    !getTokenParams
                )
                    {
                        throw new Error('getToken must have getTokenParams.');
                    }

                const options = createRequest(
                    {
                        getTokenParams: getTokenParams
                    }
                );

                const response = await httpClient(
                    SEP_GET_TOKEN_URL,
                    options
                );
        
                const getTokenResponse = await translateResponse(
                    {
                        response: response
                    }
                );

                return getTokenResponse;

            }
    }