const buildMakeCallbackRequestHeaders = require('./src/callbackRequestHeaders');
const buildMakeCallbackRequestBody = require('./src/callbackRequestBody');
const buildMakeCallbackRequest= require('./src/callbackRequest');

module.exports = function
(
    {
        TERMINAL_ID,
        makeVerifiedTransaction
    }
)
    {

        const makeCallbackRequestHeaders= buildMakeCallbackRequestHeaders();

        const makeCallbackRequestBody = buildMakeCallbackRequestBody(
            {
                TERMINAL_ID: TERMINAL_ID
            }
        );
        
        const makeCallbackRequest = buildMakeCallbackRequest(
            {
                makeCallbackRequestBody: makeCallbackRequestBody,
                makeCallbackRequestHeaders: makeCallbackRequestHeaders,
                makeVerifiedTransaction: makeVerifiedTransaction
            }
        );



        const services = Object.freeze(
            {
                makeCallbackRequest
            }
        );

        return services;
    }