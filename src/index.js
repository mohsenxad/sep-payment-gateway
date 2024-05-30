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
                SEP_TERMINAL_ID: SEP_TERMINAL_ID,
                makeInvoice: makeInvoice
            }
        );


        const services = Object.freeze(
            {
                makeInvoice,
                makeRefNum,
                createPayment,
                reversePayment,
                verifyPayment,
            }
        )


        return services;
    }