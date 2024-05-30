module.exports = function createReverseTransactionRequest
(
    RefNum
)
    {
        if
        (
            !RefNum
        )
            {
                throw new Error('createReverseTransactionRequest must have RefNum.');
            }


        const jsonData = {
            RefNum: RefNum
        };

        return jsonData;
    }