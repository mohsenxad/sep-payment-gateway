module.exports = function
(
    {
        customizedHTTPPostMethod,
        SEP_TERMINAL_ID
    }
)
    {

        const sepApiServices = require('../sep-api')(
            {
                customizedHTTPPostMethod:  customizedHTTPPostMethod,
                SEP_TERMINAL_ID: SEP_TERMINAL_ID
            }
        );

        const createPayment = require('./create-payment')(sepApiServices.getToken);

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