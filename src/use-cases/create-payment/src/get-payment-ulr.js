module.exports = function buildGetPaymentUrl
(
    token
)
    {
        if
        (
            !token
        )
            {
                throw new Error('getPaymentUrl must have token.');
            }

        return function getPaymentUrl()
            {
                const paymentUrl = `https://sep.shaparak.ir/OnlinePG/SendToken?token=${token}`;

                return paymentUrl;
            }

    }