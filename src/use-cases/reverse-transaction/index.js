const buildCreateReverseTransactionRequest = require('./src/create-reverse-transaction-request');
const buildTranslateReverseTransactionResponse = require('./src/translate-reverse-transaction-response');
const buildReverseTransaction = require('./src/reverse-transaction');

module.exports = function
(
    {
        httpClient,
        SEP_REVERSE_TRANSACTION_URL,
        makeReverseTransactionResponse
    }
)
    {

        const translateReverseTransactionResponse= buildTranslateReverseTransactionResponse(
            {
                makeReverseTransactionResponse: makeReverseTransactionResponse
            }
        );

        const createReverseTransactionRequest = buildCreateReverseTransactionRequest();
        
        const reverseTransaction = buildReverseTransaction(
            {
                createRequest: createReverseTransactionRequest,
                translateResponse: translateReverseTransactionResponse,
                httpClient: httpClient,
                SEP_REVERSE_TRANSACTION_URL: SEP_REVERSE_TRANSACTION_URL
            }
        );

        const services = Object.freeze(
            {
                reverseTransaction
            }
        );

        return services;
    }