module.exports = function
(
    {
        customizedHTTPPostMethod,
        SEP_TERMINAL_ID,
        makeInvoice
    }
)
    {

        const sepApiServices = require('../sep-api')(
            {
                customizedHTTPPostMethod:  customizedHTTPPostMethod,
                SEP_TERMINAL_ID: SEP_TERMINAL_ID
            }
        );

        const createPayment = require('./create-payment')(
            {
                getTokenApi:sepApiServices.getToken,
                makeInvoice: makeInvoice
            }
        );
        const verifyPayment = require('./verify-payment')(sepApiServices.verifyTransaction);
        const reversePayment= require('./reverse-payment')(sepApiServices.reverseTransaction);

        const use_cases = Object.freeze(
            {
                createPayment,
                verifyPayment,
                reversePayment
            }
        );

        return use_cases;
    }