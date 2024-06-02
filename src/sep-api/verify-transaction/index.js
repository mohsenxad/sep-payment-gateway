const createVerifyTransactionRequest = require('./src/create-verify-transaction-request');
const translateVerifyTransactionResponse = require('./src/translate-verify-transaction-response');
const buildVerifyTransaction = require('./src/verify-transaction');

module.exports = function
(
    {
        httpClientPostInterceptor,
        SEP_VERIFY_TRANSACTION_PATH
    }
)
    {
        const verifyTransaction = buildVerifyTransaction(
            {
                createVerifyTransactionRequest: createVerifyTransactionRequest,
                httpClientPostInterceptor: httpClientPostInterceptor,
                SEP_VERIFY_TRANSACTION_PATH: SEP_VERIFY_TRANSACTION_PATH,
                translateVerifyTransactionResponse: translateVerifyTransactionResponse

            }
        );

        return verifyTransaction;
    }