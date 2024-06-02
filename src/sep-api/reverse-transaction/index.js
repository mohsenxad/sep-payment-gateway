const translateReverseTransactionResponse = require('./src/translate-reverse-transaction-response');
const createReverseTransactionRequest = require('./src/create-reverse-transaction-request');
const buildReverseTransaction= require('./src/reverse-transaction');

module.exports = function
(
    {
        SEP_REVERSE_TRANSACTION_PATH,
        httpClientPostInterceptor
    }
)
    {
            const reverseTransaction = buildReverseTransaction(
                {
                    createReverseTransactionRequest: createReverseTransactionRequest,
                    httpClientPostInterceptor: httpClientPostInterceptor,
                    SEP_REVERSE_TRANSACTION_PATH: SEP_REVERSE_TRANSACTION_PATH,
                    translateReverseTransactionResponse: translateReverseTransactionResponse
                }
            );

            return reverseTransaction;
    }