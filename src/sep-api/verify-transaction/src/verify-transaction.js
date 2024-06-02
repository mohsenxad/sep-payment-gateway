module.exports = function buildVerifyTransaction
(
    {
        SEP_VERIFY_TRANSACTION_PATH,
        httpClientPostInterceptor,
        createVerifyTransactionRequest,
        translateVerifyTransactionResponse
    }
)
    {
        if
        (
            !SEP_VERIFY_TRANSACTION_PATH
        )
            {
                throw new Error('buildVerifyTransaction must have SEP_VERIFY_TRANSACTION_PATH.');
            }

        if
        (
            !httpClientPostInterceptor
        )
            {
                throw new Error('buildVerifyTransaction must have httpClientPostInterceptor.');
            }

        if
        (
            !createVerifyTransactionRequest
        )
            {
                throw new Error('buildVerifyTransaction must have createVerifyTransactionRequest.');
            }

        if
        (
            !translateVerifyTransactionResponse
        )
            {
                throw new Error('buildVerifyTransaction must have translateVerifyTransactionResponse.');
            }

        return async function verifyTransaction
        (
            RefNum
        )
            {
                if
                (
                    !RefNum
                )
                    {
                        throw new Error('verifyTransaction must have RefNum.');
                    }

                const verifyTransactionJsonData = createVerifyTransactionRequest(RefNum);

                const { httpResponseJsonData, httpResponseHeaders } = await httpClientPostInterceptor(
                    {
                        path: SEP_VERIFY_TRANSACTION_PATH,
                        jsonData: verifyTransactionJsonData
                    }
                );

                const result = translateVerifyTransactionResponse(
                    {
                        headers: httpResponseHeaders,
                        jsonData: httpResponseJsonData
                    }
                );

                return result;
            }
    }