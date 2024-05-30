module.exports = function buildReverseTransaction
(
    {
        SEP_REVERSE_TRANSACTION_URL,
        httpClientPostInterceptor,
        createReverseTransactionRequest,
        translateReverseTransactionResponse
    }
)
    {
        if
        (
            !SEP_REVERSE_TRANSACTION_URL
        )
            {
                throw new Error('buildReverseTransaction must have SEP_REVERSE_TRANSACTION_URL.');
            }
            
        if
        (
            !httpClientPostInterceptor
        )
            {
                throw new Error('buildReverseTransaction must have httpClientPostInterceptor.');
            }

        if
        (
            !createReverseTransactionRequest
        )
            {
                throw new Error('buildReverseTransaction must have createReverseTransactionRequest.');
            }

        if
        (
            !translateReverseTransactionResponse
        )
            {
                throw new Error('buildReverseTransaction must have translateReverseTransactionResponse.');
            }

        return async function reverseTransaction
        (
            RefNum
        )
            {

                if
                (
                    !RefNum
                )
                    {
                        throw new Error('reverseTransaction must have RefNum.');
                    }
                    
                const reverseTransactionJsonData = createReverseTransactionRequest(RefNum);


                const { httpResponseJsonData, httpResponseHeaders } = await httpClientPostInterceptor(
                    {
                        url: SEP_REVERSE_TRANSACTION_URL,
                        jsonData: reverseTransactionJsonData
                    }
                );

                const result = translateReverseTransactionResponse(
                    {
                        headers: httpResponseHeaders,
                        jsonData: httpResponseJsonData
                    }
                );

                return result;

            }
        
    }