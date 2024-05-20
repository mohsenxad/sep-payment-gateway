module.exports = function buildMakeGetTokenResponse
()
    {
        return function makeGetTokenResponse
        (
            {
                status,
                token
            }
        )
            {
                if 
                (
                    typeof status != "number"
                )
                    {
                        throw new Error('makeGetTokenResponse>status must be number.')
                    }
                else if 
                (
                    status != 1
                )
                    {
                        throw new Error('makeGetTokenResponse>status must 1 for success.')
                    }

                if 
                (
                    !token
                )
                    {
                        throw new Error('makeGetTokenResponse must have token.')
                    }

                function toJson(){
                    return {
                        status : status,
                        token: token
                    };
                }

                function toString(){
                    return `status:${status}| token:${token}`;
                }

                

                return Object.freeze(
                    {
                        getStatus: () => status,
                        getToken: () => token,
                        toJson: toJson,
                        toString: toString,
                    }
                );

                
            }
    }