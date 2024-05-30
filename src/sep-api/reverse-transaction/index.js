const translateReverseTransactionResponse = require('./src/translate-reverse-transaction-response');
const createReverseTransactionRequest = require('./src/create-reverse-transaction-request');
const buildReverseTransaction= require('./src/reverse-transaction');

module.exports = function
(
    {
        SEP_REVERSE_TRANSACTION_URL,
        httpClientPostInterceptor
    }
)
    {
            const reverseTransaction = buildReverseTransaction(
                {
                    createReverseTransactionRequest: createReverseTransactionRequest,
                    httpClientPostInterceptor: httpClientPostInterceptor,
                    SEP_REVERSE_TRANSACTION_URL: SEP_REVERSE_TRANSACTION_URL,
                    translateReverseTransactionResponse: translateReverseTransactionResponse
                }
            );

            return reverseTransaction;
    }