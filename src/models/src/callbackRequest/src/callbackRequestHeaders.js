module.exports = function buildMakeCallbackRequestHeaders
()
    {
        return function makeCallbackRequestHeaders
        (
            {
                requestHeaders
            }
        )
            {
                if
                (
                    !requestHeaders
                )
                    {
                        throw new Error('makeCallbackRequestHeaders must have requestHeaders.');
                    }
            }
    }