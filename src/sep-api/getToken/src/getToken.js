module.exports = function buildGetToken
(
    {
        SEP_GET_TOKEN_PATH,
        httpClientPostInterceptor,
        createGetTokenRequest,
        translateGetTokenResponse
    }
)
    {
        if
        (
            !SEP_GET_TOKEN_PATH
        )
            {
                throw new Error('buildGetToken must have SEP_GET_TOKEN_PATH.');
            }

        if
        (
            !httpClientPostInterceptor
        )
            {
                throw new Error('buildGetToken must have httpClientPostInterceptor.');
            }

        if
        (
            !createGetTokenRequest
        )
            {
                throw new Error('buildGetToken must have createGetTokenRequest.');
            }

        if
        (
            !translateGetTokenResponse
        )
            {
                throw new Error('buildGetToken must have translateGetTokenResponse.');
            }

        return async function getToken
        (
            {
                Amount,
                ResNum,
                RedirectURL,
                Wage,
                CellNumber,
                TokenExpiryInMin = 20
            }
        )
            {
                const getTokenJsonData = createGetTokenRequest(
                    {
                        Amount: Amount,
                        ResNum: ResNum,
                        RedirectURL: RedirectURL,
                        Wage: Wage,
                        CellNumber: CellNumber,
                        TokenExpiryInMin:TokenExpiryInMin
                    }
                );

                const { httpResponseJsonData, httpResponseHeaders } = await httpClientPostInterceptor(
                    {
                        path: SEP_GET_TOKEN_PATH,
                        jsonData: getTokenJsonData
                    }
                );

                const result = translateGetTokenResponse(
                    {
                        headers: httpResponseHeaders,
                        jsonData: httpResponseJsonData
                    }
                );

                return result;
            }
    }