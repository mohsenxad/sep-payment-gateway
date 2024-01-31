module.exports = function buildCreateVerifyTransactionRequest
()
    {
        return function createVerifyTransactionRequest
        (
            {
                verifyTransactionRequest
            }
        )
            {
                if
                (
                    !verifyTransactionRequest
                )
                    {
                        throw new Error('createVerifyTransactionRequest must have verifyTransactionRequest.');
                    }

                const jsonData = verifyTransactionRequest.toJson();

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