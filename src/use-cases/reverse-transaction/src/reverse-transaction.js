module.exports = function buildReverseTransaction
(
    {
        httpClient,
        createRequest,
        translateResponse,
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
            !createRequest
        )
            {
                throw new Error('buildReverseTransaction must have createRequest.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildReverseTransaction must have translateResponse.');
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
                reverseTransactionRequest
            }
        )
            {
                if
                (
                    !reverseTransactionRequest
                )
                    {
                        throw new Error('reverseTransaction must have reverseTransactionRequest.');
                    }

                const options = createRequest(
                    {
                        reverseTransactionRequest: reverseTransactionRequest
                    }
                );

                const response = await httpClient(
                    SEP_REVERSE_TRANSACTION_URL,
                    options
                );
        
                const reverseTransactionResponse = await translateResponse(
                    {
                        response: response
                    }
                );

                return reverseTransactionResponse;
            }
    }