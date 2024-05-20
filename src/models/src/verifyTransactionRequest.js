module.exports = function buildMakeVerifyTransactionRequest
(
    {
        TERMINAL_ID,
        verifyTransactionFromApi,
        translateVerifyTransactionHttpResponse,
        makeRefNum,
        makeVerifyTransactionResponse
    }
)
    {
        if
        (
            !TERMINAL_ID
        )
            {
                throw new Error('buildMakeVerifyTransactionRequest must have TERMINAL_ID.');
            }

        if
        (
            !verifyTransactionFromApi
        )
            {
                throw new Error('buildMakeVerifyTransactionRequest must have verifyTransactionFromApi.');
            }

        if
        (
            !translateVerifyTransactionHttpResponse
        )
            {
                throw new Error('buildMakeVerifyTransactionRequest must have translateVerifyTransactionHttpResponse.');
            }
            
        if
        (
            !makeRefNum
        )
            {
                throw new Error('buildMakeVerifyTransactionRequest must have makeRefNum.');
            }

        if
        (
            !makeVerifyTransactionResponse
        )
            {
                throw new Error('buildMakeVerifyTransactionRequest must have makeVerifyTransactionResponse.');
            }
            

        return function makeVerifyTransactionRequest
        (
            {
                RefNum
            }
        )
            {
                let verficationResult;

                if
                (
                    !RefNum
                )
                    {
                        throw new Error('makeVerifyTransactionRequest must have RefNum.');
                    }

                const refNumObject = makeRefNum(
                    {
                        refNumValue: RefNum
                    }
                )

                function toJson()
                {

                    let jsonData = {
                        RefNum: refNumObject.getRefNum(),
                        TerminalId: TERMINAL_ID
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

                const verify = async() =>
                    {
                        if
                        (
                            verficationResult
                        )
                            {
                                return verficationResult;
                            }
                        else
                            {   
                                const verifyTransactionFromApiResult = await verifyTransactionFromApi(
                                    {
                                        httpClientOptions: getFetchOptions()
                                    }
                                );
            
                                const translateVerifyTransactionHttpResponseResult = await translateVerifyTransactionHttpResponse(
                                    {
                                        response: verifyTransactionFromApiResult
                                    }
                                );
            
                                const makeVerifyTransactionResponseResult = makeVerifyTransactionResponse(translateGetTokenResponseResult);
            
                                verficationResult = makeVerifyTransactionResponseResult;

                                return token
                            }
                    }

                return Object.freeze(
                    {
                        getRefNum: () => refNumObject.getRefNum(),
                        toJson: toJson,
                        toString: toString,
                        verify: verify
                    }
                );
                
            }
    }