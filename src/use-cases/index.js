const SEP_GET_TOKEN_URL = "https://sep.shaparak.ir/onlinepg/onlinepg";
const SEP_VERIFY_TRANSACTION_URL = "https://sep.shaparak.ir/verifyTxnRandomSessionkey/ipg/VerifyTransaction";
const SEP_REVERSE_TRANSACTION_URL = "https://sep.shaparak.ir/verifyTxnRandomSessionkey/ipg/ReverseTransaction"

module.exports = function
(
    {
        SEP_TERMINAL_ID
    }
)
    {
        const providers = require('../providers')();

        const models = require('../models')(
            {
                SEP_TERMINAL_ID: SEP_TERMINAL_ID
            }
        )

        const { getToken } = require('./getToken')(
            {
                httpClient: providers.httpClient.fetch,
                SEP_GET_TOKEN_URL: SEP_GET_TOKEN_URL,
                makeGetTokenResponse:models.makeGetTokenResponse
            }
        );

        const { verifyTransaction } = require('./verify-transaction')(
            {
                httpClient: providers.httpClient.fetch,
                makeVerifyTransactionResponse: models.makeVerifyTransactionResponse,
                SEP_VERIFY_TRANSACTION_URL: SEP_VERIFY_TRANSACTION_URL
            }
        );

        const { reverseTransaction } = require('./reverse-transaction')(
            {
                httpClient: providers.httpClient.fetch,
                makeReverseTransactionResponse: models.makeReverseTransactionResponse,
                SEP_REVERSE_TRANSACTION_URL: SEP_REVERSE_TRANSACTION_URL
            }
        );

        const services = Object.freeze(
            {
                makeGetTokenRequest: models.makeGetTokenRequest,
                getToken: getToken,
                makeVerifyTransactionRequest: models.makeVerifyTransactionRequest,
                verifyTransaction: verifyTransaction,
                makeReverseTransactionRequest: models.makeReverseTransactionRequest,
                reverseTransaction: reverseTransaction,
            }
        );

        return services;
    }