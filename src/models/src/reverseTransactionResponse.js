module.exports = function buildMakeReverseTransactionResponse
()
    {
        return function makeReverseTransactionResponse
        (
            {
                TransactionDetail,
                ResultCode,
                ResultDescription,
                Success
            }
        )
            {
                if 
                (
                    !TransactionDetail
                )
                    {
                        throw new Error('makeReverseTransactionResponse must have TransactionDetail.')
                    }

                if 
                (
                    !ResultCode
                )
                    {
                        throw new Error('makeReverseTransactionResponse must have ResultCode.')
                    }

                if 
                (
                    !ResultDescription
                )
                    {
                        throw new Error('makeReverseTransactionResponse must have ResultDescription.')
                    }

                if 
                (
                    !Success
                )
                    {
                        throw new Error('makeReverseTransactionResponse must have Success.')
                    }
                
            }
    }