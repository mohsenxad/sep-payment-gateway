module.exports = function buildReversePayment
(
    reversePaymentApi
)
    {
        if
        (
            !reversePaymentApi
        )
            {
                throw new Error('buildReversePayment must have reversePaymentApi.');
            }

        return async function reversePayment
        (
            RefNum
        )
            {
                if
                (
                    !RefNum
                )
                    {
                        throw new Error('reversePayment must have RefNum.');
                    }

                const {TransactionDetail , ResultCode, ResultDescription, Success} = await reversePaymentApi(RefNum);


                const result = Object.freeze(
                    {
                        getTransactionDetail: ()=> TransactionDetail,
                        getResultCode: ()=> ResultCode,
                        getResultDescription: ()=> ResultDescription,
                        getSuccess: ()=> Success,
                    }
                );

                return result;

            }
    }