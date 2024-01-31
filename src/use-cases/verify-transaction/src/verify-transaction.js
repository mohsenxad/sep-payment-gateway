module.exports = function buildVerifyTransaction
(
    {
        httpClient,
        createRequest,
        translateResponse,
        SEP_VERIFY_TRANSACTION_URL
    }
)
    {
        if
        (
            !httpClient
        )
            {
                throw new Error('buildVerifyTransaction must have httpClient.');
            }

        if
        (
            !createRequest
        )
            {
                throw new Error('buildVerifyTransaction must have createRequest.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildVerifyTransaction must have translateResponse.');
            }

        if
        (
            !SEP_VERIFY_TRANSACTION_URL
        )
            {
                throw new Error('buildVerifyTransaction must have SEP_VERIFY_TRANSACTION_URL.');
            }
        
        return async function verifyTransaction
        (
            {
                verifyTransactionRequest
            }
        )
            {
                if
                (
                    !verifyTransactionRequest
                )
                    {
                        throw new Error('verifyTransaction must have verifyTransactionRequest.');
                    }

                const options = createRequest(
                    {
                        verifyTransactionRequest: verifyTransactionRequest
                    }
                );

                const response = await httpClient(
                    SEP_VERIFY_TRANSACTION_URL,
                    options
                );
        
                const verifyTransactionResponse = await translateResponse(
                    {
                        response: response
                    }
                );

                return verifyTransactionResponse;
            }
    }