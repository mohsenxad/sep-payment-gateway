module.exports = function buildMakeGetTokenRequest
(
    {
        TERMINAL_ID,
        getTokenFromApi,
        translateGetTokenResponse,
        makeGetTokenResponse
    }
)
    {
        if
        (
            !TERMINAL_ID
        )
            {
                throw new Error('buildMakeGetTokenRequest must have TERMINAL_ID.');
            }

        if
        (
            !getTokenFromApi
        )
            {
                throw new Error('buildMakeGetTokenRequest must have getTokenFromApi.');
            }

        if
        (
            !translateGetTokenResponse
        )
            {
                throw new Error('buildMakeGetTokenRequest must have translateGetTokenResponse.');
            }

        if
        (
            !makeGetTokenResponse
        )
            {
                throw new Error('buildMakeGetTokenRequest must have makeGetTokenResponse.');
            }

            
            
        return function makeGetTokenRequest
        (
            {
                Amount,
                ResNum,
                RedirectURL,
                Wage,
                CellNumber,
                TokenExpiryInMin = 20
            }
        )
            {

                let token;

                if
                (
                    !Amount
                )
                    {
                        throw new Error('makeGetTokenRequest must have Amount.');
                    }
                else if
                (
                    typeof Amount != "number"
                )
                    {
                        throw new Error('makeGetTokenRequest>Amount must have number.');
                    }

                if
                (
                    !ResNum
                )
                    {
                        throw new Error('makeGetTokenRequest must have ResNum.');
                    }

                if
                (
                    !RedirectURL
                )
                    {
                        throw new Error('makeGetTokenRequest must have RedirectURL.');
                    }

                

                

                function toJson()
                    {

                        let jsonData = {
                            action: "token",
                            TerminalId: TERMINAL_ID,
                            Amount: Amount,
                            ResNum: ResNum,
                            RedirectURL: RedirectURL,
                            TokenExpiryInMin: TokenExpiryInMin
                        };
        
                        if
                        (
                            Wage  
                        )
                            {
                                jsonData.Wage = Wage
                            }
        
                        if
                        (
                            CellNumber  
                        )
                            {
                                jsonData.CellNumber = CellNumber
                            }

                        return jsonData;
                    }

                function toString()
                    {
                        return `Amount:${Amount}| ResNum:${ResNum}|RedirectURL:${RedirectURL}| TokenExpiryInMin:${TokenExpiryInMin}`;
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

                const getToken = async ()=>
                    {
                        if
                        (
                            token
                        )
                            {
                                return token;
                            }
                        else
                            {   
                                const getTokenFromApiResult = await getTokenFromApi(
                                    {
                                        httpClientOptions: getFetchOptions()
                                    }
                                );
            
                                const translateGetTokenResponseResult = await translateGetTokenResponse(
                                    {
                                        response: getTokenFromApiResult
                                    }
                                );
            
                                const makeGetTokenResponseResult = makeGetTokenResponse(translateGetTokenResponseResult);
            
                                token = makeGetTokenResponseResult.getToken();

                                return token
                            }
                    
                    };

                const getGoToShaparakHTMLPage = async()=>
                    {
                        const token = await getToken();

                        const content = `<!DOCTYPE html><html><head></head><body onload="document.getElementById('t').submit()"><form id='t' action="https://sep.shaparak.ir/OnlinePG/OnlinePG" method="post"><input type="hidden" name="Token" value="${token}" /></form></body></html>`;

                        return content;
                    };

                const getGoToShaparakUrl = async()=>
                    {
                        const token = await getToken();

                        const content = `https://sep.shaparak.ir/OnlinePG/SendToken?token=${token}`;

                        return content;
                    }




                return Object.freeze(
                    {
                        getAmount: () => Amount,
                        getResNum: () => ResNum,
                        getRedirectURL: () => RedirectURL,
                        getTokenExpiryInMin: () => TokenExpiryInMin,
                        toJson: toJson,
                        toString: toString,
                        getToken: getToken,
                        getGoToShaparakHTMLPage: getGoToShaparakHTMLPage,
                        getGoToShaparakUrl: getGoToShaparakUrl
                    }
                );
            }
    }