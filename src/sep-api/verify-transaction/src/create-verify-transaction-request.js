module.exports = function createVerifyTransactionRequest
(
    RefNum
)
    {
        if
        (
            !RefNum
        )
            {
                throw new Error('createVerifyTransactionRequest must have RefNum.');
            }

        const jsonData = {
            RefNum: RefNum
        };

        return jsonData; 

    }