const buildReversePayment = require('./src/reverse-payment');

module.exports = function
(
    reversePaymentApi
)
    {
        const reversePayment = buildReversePayment(reversePaymentApi)

        return reversePayment;
    }