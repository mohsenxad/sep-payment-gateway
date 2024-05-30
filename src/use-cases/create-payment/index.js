const buildCreatePayment = require('./src/create-payment');

module.exports = function
(
    {
        getTokenApi,
        makeInvoice
    }
)
    {
        const createPayment = buildCreatePayment(
            {
                getTokenApi: getTokenApi,
                makeInvoice: makeInvoice
            }
        );

        return createPayment;
    }