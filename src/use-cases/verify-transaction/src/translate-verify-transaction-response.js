module.exports = function buildTranslateVerifyTransactionResponse
(
    {
        makeVerifyTransactionResponse
    }
)
    {
        if
        (
            !makeVerifyTransactionResponse
        )
            {
                throw new Error('SEP|buildTranslateVerifyTransactionResponse must have makeVerifyTransactionResponse')
            }

        return async function translateVerifyTransactionResponse
        (
            {
                response
            }
        )
            {
                if
                (
                    !response
                )
                    {
                        throw new Error('SEP|translateVerifyTransactionResponse must have response')
                    }
                else if
                (
                    !response.headers
                )
                    {
                        throw new Error('SEP|translateVerifyTransactionResponse response must have headers.');
                    }

                const contentType = response.headers.get('content-type');

                if
                (
                    contentType.includes('json')
                )
                    {
                        let jsonResponse;
        
                        try 
                            {
                                jsonResponse = await response.json();
                            }
                        catch
                        (
                            error
                        )
                            {
                                throw error; 
                            }
        
                        if
                        (
                            jsonResponse.status == 1 &&
                            jsonResponse.token
                        )
                            {
                                const getTokenResponse = makeGetTokenResponse(jsonResponse)
                                return getTokenResponse;

                            }
                        else if
                        (
                            jsonResponse.status == -1 &&
                            jsonResponse.errorCode &&
                            jsonResponse.errorDesc 
                        )
                            {
                                throw new Error(jsonResponse.errorDesc)
                            }
                        else
                            {
                                const unknownResponseFromSEP = `SEP|translateVerifyTransactionResponse Unknown Response On Get Token ${JSON.stringify(response)}`;
                                throw new Error(unknownResponseFromSEP);
                            }
                    }
                else
                    {
                        console.log(`contentType: ${contentType}`);
                        try
                            {
                                const textResponse = await response.text();

                                throw new Error(`SEP|translateVerifyTransactionResponse Error | text response | ${textResponse}`);
                            }
                        catch
                        (
                            error
                        )
                            {
                                throw error;        
                            }
                    }
                
            }
    }