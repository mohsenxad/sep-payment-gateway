module.exports = function translateReverseTransactionResponse
(
    {
        headers,
        jsonData
    }
)
    {
        if
        (
            !headers
        )
            {
                throw new Error('translateReverseTransactionResponse must have headers.');
            }
        //check conditions for headers

        if
        (
            !jsonData
        )
            {
                throw new Error('translateReverseTransactionResponse must have jsonData.');
            }
        else if
        (
            typeof jsonData.ResultCode != "number"
        )
            {
                throw new Error('translateGetTokenResponse> jsonData must have ResultCode.');
            }
        else if
        (
            !jsonData.ResultDescription
        )
            {
                throw new Error('translateGetTokenResponse> jsonData must have ResultDescription.');
            }
        else if
        (
            typeof jsonData.Success != "boolean"
        )
            {
                throw new Error('translateGetTokenResponse> jsonData must have Success.');
            }

            

        const sep_result_code = jsonData.ResultCode;
        const sep_result_description = jsonData.ResultDescription;
        const sep_isSuccess = jsonData.Success;

        if
        (
            sep_result_code == 0 &&
            sep_isSuccess == true
        )
            {
                if
                (
                    !jsonData.TransactionDetail
                )
                    {
                        throw new Error('translateReverseTransactionResponse must have jsonData.');
                    }

                return jsonData;
            }
        else if
        (
            sep_result_code == 2 &&
            sep_isSuccess == true
        )
            {
                // HERE IS SOME CONFLICT
                // THIS PAYMENT WAS SUCCESSFUL BUT IN PAST
                // BUT THIS IS NOT AS SUCCESSFUL PAYMENT

                throw new Error(`translateReverseTransactionResponse Error | ${sep_result_code} | ${sep_result_description}`)
            }
        else
            {
                throw new Error(`translateReverseTransactionResponse Error | ${sep_result_code} | ${sep_result_description}`)
            }
    }