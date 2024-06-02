module.exports = function buildReverseTransaction
(
    {
        SEP_REVERSE_TRANSACTION_PATH,
        httpClientPostInterceptor,
        createReverseTransactionRequest,
        translateReverseTransactionResponse
    }
)
    {
        if
        (
            !SEP_REVERSE_TRANSACTION_PATH
        )
            {
                throw new Error('buildReverseTransaction must have SEP_REVERSE_TRANSACTION_PATH.');
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
                        path: SEP_REVERSE_TRANSACTION_PATH,
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