module.exports = function translateGetTokenResponse
(
    {
        headers,
        jsonData
    }
)
    {
        if
        (
            !headers
        )
            {
                throw new Error('translateGetTokenResponse must have headers.');
            }
        //check conditions for headers

        if
        (
            !jsonData
        )
            {
                throw new Error('translateGetTokenResponse must have jsonData.');
            }
        else if
        (
            !jsonData.status
        )
            {
                throw new Error('translateGetTokenResponse> jsonData must have status.');
            }

        const sep_status = jsonData.status;

        if
        (
            sep_status == 1
        )
            {

                if
                (
                    !jsonData.token
                )
                    {
                        throw new Error('translateGetTokenResponse>jsonData must have token with status code 1.');
                    }
                
                    const result = {
                        status: jsonData.status,
                        token: jsonData.token
                    };
            
                    return result;
            }
        else if
        (
            sep_status == -1
        )
            {
                if
                (
                    !jsonData.errorCode
                )
                    {
                        throw new Error('translateGetTokenResponse>jsonData must have errorCode with status code -1.');
                    }

                if
                (
                    !jsonData.errorDesc
                )
                    {
                        throw new Error('translateGetTokenResponse>jsonData must have errorDesc with status code -1.');
                    }

                const sep_error_code = jsonData.errorCode;
                const sep_error_message = jsonData.errorDesc;

                throw new Error(`translateGetTokenResponse Error|${sep_error_code}|${sep_error_message}`);

            }
        else
            {
                throw new Error(`translateGetTokenResponse Unknown Error|${sep_status}|${JSON.stringify(jsonData)}`);
            }

    }