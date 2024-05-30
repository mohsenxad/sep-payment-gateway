const buildVerifyPayment = require('./src/verify-payment');

module.exports = function
(
    verifyPaymentApi
)
    {
        const verifyPayment = buildVerifyPayment(verifyPaymentApi);

        return verifyPayment;
    }