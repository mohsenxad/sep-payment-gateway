module.exports = function buildCreateReverseTransactionRequest
()
    {
        return function createReverseTransactionRequest
        (
            {
                reverseTransactionRequest
            }
        )
            {
                if
                (
                    !reverseTransactionRequest
                )
                    {
                        throw new Error('createReverseTransactionRequest must have reverseTransactionRequest.');
                    }

                const jsonData = reverseTransactionRequest.toJson();

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