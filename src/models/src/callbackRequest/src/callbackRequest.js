module.exports = function buildMakeCallbackRequest
(
    {
        makeCallbackRequestHeaders,
        makeCallbackRequestBody
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

        return function makeCallbackRequest
        (
            {
                callbackHttpRequest
            }
        )
            {
                if
                (
                    !callbackHttpRequest
                )
                    {
                        throw new Error('makeCallbackRequest must have callbackHttpRequest.');
                    }

                else if
                (
                    !callbackHttpRequest.headers
                )
                    {
                        throw new Error('makeCallbackRequest>callbackHttpRequest must have headers.');
                    }
                else if
                (
                    !callbackHttpRequest.body
                )
                    {
                        throw new Error('makeCallbackRequest>callbackHttpRequest must have body.');
                    }
                
                const requestHeaders = callbackHttpRequest.headers;
                const requestBody = callbackHttpRequest.body;


                const callbackRequestHeaders = makeCallbackRequestHeaders(
                    {
                        requestHeaders: requestHeaders
                    }
                );

                const callbackRequestBody = makeCallbackRequestBody(
                    {
                        requestBody: requestBody
                    }
                );

                
            }
    }