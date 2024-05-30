const createVerifyTransactionRequest = require('./src/create-verify-transaction-request');
const translateVerifyTransactionResponse = require('./src/translate-verify-transaction-response');
const buildVerifyTransaction = require('./src/verify-transaction');

module.exports = function
(
    {
        httpClientPostInterceptor,
        SEP_VERIFY_TRANSACTION_URL
    }
)
    {
        const verifyTransaction = buildVerifyTransaction(
            {
                createVerifyTransactionRequest: createVerifyTransactionRequest,
                httpClientPostInterceptor: httpClientPostInterceptor,
                SEP_VERIFY_TRANSACTION_URL: SEP_VERIFY_TRANSACTION_URL,
                translateVerifyTransactionResponse: translateVerifyTransactionResponse

            }
        );

        return verifyTransaction;
    }