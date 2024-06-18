const buildUseCases = require('./src')

module.exports = function(
    {
        SEP_TERMINAL_ID,
        customizedHTTPPostMethod
    }
)
    {
        const useCases= buildUseCases(
            {
                customizedHTTPPostMethod: customizedHTTPPostMethod,
                SEP_TERMINAL_ID: SEP_TERMINAL_ID 
            }
        );

        return useCases;
    }