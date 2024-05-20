module.exports = function buildTranslateVerifyTransactionResponse
()
    {
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

                // check if the response is from SEP servers

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
                            !jsonResponse.Success
                        )
                            {
                                throw new Error('SEP|translateVerifyTransactionResponse jsonResponse must have Success.');
                            }
                        else if
                        (
                            typeof jsonResponse.Success != "boolean"
                        )
                            {
                                throw new Error('SEP|translateVerifyTransactionResponse>jsonResponse> Success must bee boolean.');
                            }

                        if
                        (
                            !jsonResponse.ResultCode 
                        )
                            {
                                throw new Error('SEP|translateVerifyTransactionResponse jsonResponse must have ResultCode.');
                            }
                        else if
                        (
                            typeof jsonResponse.ResultCode != "number"
                        )
                            {
                                throw new Error('SEP|translateVerifyTransactionResponse>jsonResponse>ResultCode must bee number.');
                            }

                        if
                        (
                            jsonResponse.Success &&
                            jsonResponse.ResultCode === 0
                        )
                            {
                                // process success 
                                if
                                (   
                                    !jsonResponse.TransactionDetail
                                )
                                    {
                                        throw new Error('SEP|translateVerifyTransactionResponse>jsonResponse must have TransactionDetail.');
                                    }
                                else
                                    {
                                        return jsonResponse;
                                    }
                            }
                        else if
                        (
                            !jsonResponse.Success &&
                            jsonResponse.ResultCode !== 0 &&
                            jsonResponse.ResultDescription
                        )
                            {
                                const notVerifiedPaymentErrorMessage = `SEP|translateVerifyTransactionResponse not verified Payemnet | ${jsonResponse.ResultCode}| ${jsonResponse.ResultDescription}`;
                                throw new Error(notVerifiedPaymentErrorMessage)

                            }
                        else
                            {
                                const unknownVerifyPaymentResponseErrorMessage = `SEP|translateVerifyTransactionResponse unknown Verify Transaction Response | ${JSON.stringify(jsonResponse)}`;
                                throw new Error(unknownVerifyPaymentResponseErrorMessage)
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