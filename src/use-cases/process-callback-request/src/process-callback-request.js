module.exports = function buildProcessCallbackRequest
(
    {
        makeCallbackRequest
    }
)
    {
        if
        (
            !makeCallbackRequest
        )
            {
                throw new Error('buildProcessCallbackRequest must have makeCallbackRequest.');
            }
            
        return async function processCallbackRequest
        (
            {
                headers,
                body
            }
        )
            {
                const callbackRequest = makeCallbackRequest(
                    {
                        headers: headers,
                        body: body
                    }
                );

                return callbackRequest;
            }
    }