const buildCreateVerifyTransactionRequest = require('./src/create-verify-transaction-request');
const buildTranslateVerifyTransactionResponse = require('./src/translate-verify-transaction-response');
const buildVerifyTransaction = require('./src/verify-transaction');

module.exports = function
(
    {
        httpClient,
        SEP_VERIFY_TRANSACTION_URL,
        makeVerifyTransactionResponse
    }
)
    {

        const translateVerifyTransactionResponse= buildTranslateVerifyTransactionResponse(
            {
                makeVerifyTransactionResponse: makeVerifyTransactionResponse
            }
        );

        const createVerifyTransactionRequest = buildCreateVerifyTransactionRequest();

        const verifyTransaction = buildVerifyTransaction(
            {
                createRequest: createVerifyTransactionRequest,
                translateResponse: translateVerifyTransactionResponse,
                httpClient: httpClient,
                SEP_VERIFY_TRANSACTION_URL: SEP_VERIFY_TRANSACTION_URL
            }
        );

        const services = Object.freeze(
            {
                verifyTransaction
            }
        );

        return services;
    }