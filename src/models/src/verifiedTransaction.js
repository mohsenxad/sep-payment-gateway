module.exports = function buildMakeVerifiedTransaction
(
    {
        TERMINAL_ID,
        reverseTransactionFromApi,
        translateReverseTransactionHttpResponse,
        makeReversedTransaction
    }
)
    {
        if
        (
            !TERMINAL_ID
        )
            {
                throw new Error('buildMakeVerifiedTransaction must have TERMINAL_ID.');
            }

        if
        (
            !reverseTransactionFromApi
        )
            {
                throw new Error('buildMakeVerifiedTransaction must have reverseTransactionFromApi.');
            }

        if
        (
            !translateReverseTransactionHttpResponse
        )
            {
                throw new Error('buildMakeVerifiedTransaction must have translateReverseTransactionHttpResponse.');
            }
            
        return function makeVerifiedTransaction
        (
            {
                verifyTransactionRequest,
                verificationResult
            }
        )
            {
                if
                (
                    !verifyTransactionRequest
                )
                    {
                        throw new Error('makeVerifiedTransaction must have verifyTransactionRequest.');
                    }

                if
                (
                    !verificationResult
                )
                    {
                        throw new Error('makeVerifiedTransaction must have verificationResult.');
                    }

                function toJson()
                    {
                        let jsonData = {
                            RefNum: verifyTransactionRequest.getRefNum()
                        };
        
                        return jsonData;
                    }

                function toString()
                    {
                        return `RefNum:${refNumObject.getRefNum()}`;
                    }

                function getFetchOptions()
                    {

                        const body = JSON.stringify(
                            toJson()
                        );

                        const headers = {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        };

                
                        const options= {
                            method:"POST",
                            headers: headers,
                            body: body
                        };

                        return options;  
                    }

                const reverse = async()=>
                    {
                        const reverseTransactionFromApiResult = await reverseTransactionFromApi(
                            {
                                httpClientOptions: getFetchOptions()
                            }
                        );
    
                        const translateReverseTransactionResponseResult = await translateReverseTransactionResponse(
                            {
                                response: reverseTransactionFromApiResult
                            }
                        );
    
                        const reversedTransaction = makeReversedTransaction(translateReverseTransactionResponseResult);
    
                        return reversedTransaction
                    }

                return Object.freeze(
                    {
                        getRefNum: () => refNumObject.getRefNum(),
                        toJson: toJson,
                        toString: toString,
                        reverse: reverse
                    }
                );   
            }
    }