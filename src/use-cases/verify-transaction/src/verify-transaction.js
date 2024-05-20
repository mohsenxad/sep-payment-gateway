module.exports = function buildVerifyTransaction
(
    {
        httpClient,
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
            !SEP_VERIFY_TRANSACTION_URL
        )
            {
                throw new Error('buildVerifyTransaction must have SEP_VERIFY_TRANSACTION_URL.');
            }
        
        return async function verifyTransaction
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
                        throw new Error('verifyTransaction must have httpClientOptions.');
                    }

                const httpClientResponse = await httpClient(
                    SEP_VERIFY_TRANSACTION_URL,
                    httpClientOptions
                );
        
                return httpClientResponse;

            }
    }