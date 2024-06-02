module.exports = function
(
    {
        SEP_TERMINAL_ID,
        customizedHTTPPostMethod
    }
)
    {
        const {makeInvoice, makeRefNum, makeTransactionDetail} = require('./entities')(SEP_TERMINAL_ID);

        const {createPayment, reversePayment, verifyPayment}= require('./use-cases')(
            {
                customizedHTTPPostMethod: customizedHTTPPostMethod,
                SEP_TERMINAL_ID: SEP_TERMINAL_ID
            }
        );


        const services = Object.freeze(
            {
                makeInvoice,
                createPayment,
                reversePayment,
                verifyPayment,
            }
        )


        return services;
    }