module.exports = function buildMakeCallbackRequest
(
    {
        makeCallbackRequestHeaders,
        makeCallbackRequestBody,
        verifyTransactionFromApi,
        makeVerifiedTransaction,
        translateVerifyTransactionResponse
    }
)
    {
        if
        (
            !makeCallbackRequestHeaders
        )
            {
                throw new Error('buildMakeCallbackRequest must have makeCallbackRequestHeaders.');
            }

        if
        (
            !makeCallbackRequestBody
        )
            {
                throw new Error('buildMakeCallbackRequest must have makeCallbackRequestBody.');
            }

        if
        (
            !verifyTransactionFromApi
        )
            {
                throw new Error('buildMakeCallbackRequest must have verifyTransactionFromApi.');
            }

        if
        (
            !makeVerifiedTransaction
        )
            {
                throw new Error('buildMakeCallbackRequest must have makeVerifiedTransaction.');
            }

        if
        (
            !translateVerifyTransactionResponse
        )
            {
                throw new Error('buildMakeCallbackRequest must have translateVerifyTransactionResponse.');
            }

            

        return function makeCallbackRequest
        (
            {
                headers,
                body
            }
        )
            {
                if
                (
                    !headers
                )
                    {
                        throw new Error('makeCallbackRequest must have headers.');
                    }
                
                if
                (
                    !body
                )
                    {
                        throw new Error('makeCallbackRequest must have body.');
                    }
                

                const callbackRequestHeaders = makeCallbackRequestHeaders(
                    {
                        requestHeaders: headers
                    }
                );

                const callbackRequestBody = makeCallbackRequestBody(
                    {
                        requestBody: body
                    }
                );


                const verify = async()=>{
                    
                    const verifyTransactionFromApiResult = await verifyTransactionFromApi();

                    const translateVerifyTransactionResponseResult = await translateVerifyTransactionResponse(
                        {
                            response: verifyTransactionFromApiResult
                        }
                    );

                    const verifiedTransaction = makeVerifiedTransaction(
                        {
                            callbackRequest: this,
                            verificationResult: translateVerifyTransactionResponseResult
                        }
                    );

                    return verifiedTransaction;

                }

                return Object.freeze(
                    {
                        getCallbackRequestHeaders:() => callbackRequestHeaders,
                        getCallbackRequestBody: () => callbackRequestBody,
                        verify: ()=> verify
                    }
                );
            }
    }