module.exports = function buildReverseTransaction
(
    {
        httpClient,
        SEP_REVERSE_TRANSACTION_URL
    }
)
    {

        if
        (
            !httpClient
        )
            {
                throw new Error('buildReverseTransaction must have httpClient.');
            }

        if
        (
            !SEP_REVERSE_TRANSACTION_URL
        )
            {
                throw new Error('buildReverseTransaction must have SEP_REVERSE_TRANSACTION_URL.');
            }

        return async function reverseTransaction
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
                        throw new Error('reverseTransaction must have httpClientOptions.');
                    }

                    const httpClientResponse = await httpClient(
                        SEP_GET_TOKEN_URL,
                        httpClientOptions
                    );
            
                    return httpClientResponse;
            }
    }