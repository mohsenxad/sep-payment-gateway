module.exports = function buildCreateGetTokenRequest
(
    {
        makeGetTokenRequest
    }
)
    {
        if
        (
            !makeGetTokenRequest
        )
            {
                throw new Error('buildCreateGetTokenRequest must have makeGetTokenRequest.');
            }

        return function createGetTokenRequest
        (
            {
                getTokenParams
            }
        )
            {
                if
                (
                    !getTokenParams
                )
                    {
                        throw new Error('createGetTokenRequest must have getTokenParams.');
                    }

                const getTokenRequest = makeGetTokenRequest(getTokenParams);

                const jsonData = getTokenRequest.toJson();

                const body = JSON.stringify(
                    jsonData
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

                // {
                //     url:'https://sep.shaparak.ir/onlinepg/onlinepg',
                //     method: 'POST',
                //     proxy: proxyUrl,
                //     json: jsonData
                // }
        
                return options;   
            }
    }