module.exports = function buildMakeVerifyTransactionResponse
()
    {
        return function makeVerifyTransactionResponse
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
                        throw new Error('makeVerifyTransactionResponse must have TransactionDetail.')
                    }

                if 
                (
                    !ResultCode
                )
                    {
                        throw new Error('makeVerifyTransactionResponse must have ResultCode.')
                    }

                if 
                (
                    !ResultDescription
                )
                    {
                        throw new Error('makeVerifyTransactionResponse must have ResultDescription.')
                    }

                if 
                (
                    !Success
                )
                    {
                        throw new Error('makeVerifyTransactionResponse must have Success.')
                    }
                
            }
    }