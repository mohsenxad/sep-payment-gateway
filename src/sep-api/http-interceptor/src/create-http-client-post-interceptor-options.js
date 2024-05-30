module.exports= function buildCreateHttpClientPostInterceptorOptions
(
    SEP_TERMINAL_ID
)
    {
        if
        (
            !SEP_TERMINAL_ID
        )
            {
                throw new Error('buildCreateHttpClientPostInterceptorOptions must have SEP_TERMINAL_ID.');
            }

        const SEP_TERMINAL_ID_AS_NUMBER = parseInt(SEP_TERMINAL_ID)
            
        return function createHttpClientPostInterceptorOptions
        (
            {
                jsonData
            }
        )
            {
                if
                (
                    !jsonData
                )
                    {
                        throw new Error('createHttpClientPostInterceptorOptions must have jsonData.');
                    }
        
                jsonData.TerminalId = SEP_TERMINAL_ID
                jsonData.TerminalNumber = SEP_TERMINAL_ID_AS_NUMBER
        
                const body = JSON.stringify(
                    jsonData
                );
        
                const headers = {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                };
        
                const result = {
                    body: body, 
                    headers: headers
                }
        
                return result;
        
            }
    }
