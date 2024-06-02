const buildCreatePayment = require('./src/create-payment');

module.exports = function
(
    getTokenApi
)
    {
        const createPayment = buildCreatePayment(
            getTokenApi
        );

        return createPayment;
    }