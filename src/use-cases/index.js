const SEP_GET_TOKEN_URL = "https://sep.shaparak.ir/onlinepg/onlinepg";
const SEP_VERIFY_TRANSACTION_URL = "https://sep.shaparak.ir/verifyTxnRandomSessionkey/ipg/VerifyTransaction";
const SEP_REVERSE_TRANSACTION_URL = "https://sep.shaparak.ir/verifyTxnRandomSessionkey/ipg/ReverseTransaction"

module.exports = function
(
    {
        SEP_TERMINAL_ID,
        isOrderShippable
    }
)
    {
        const providers = require('../providers')();

        const { getToken, translateGetTokenResponse } = require('./getToken')(
            {
                httpClient: providers.httpClient.fetch,
                SEP_GET_TOKEN_URL: SEP_GET_TOKEN_URL,
                //makeGetTokenResponse:models.makeGetTokenResponse
            }
        );

        const { verifyTransaction, translateVerifyTransactionResponse } = require('./verify-transaction')(
            {
                httpClient: providers.httpClient.fetch,
                SEP_VERIFY_TRANSACTION_URL: SEP_VERIFY_TRANSACTION_URL,
                //makeVerifyTransactionResponse: models.makeVerifyTransactionResponse,
            }
        );

        const models = require('../models')(
            {
                TERMINAL_ID: SEP_TERMINAL_ID,
                getTokenFromApi: getToken,
                verifyTransactionFromApi:verifyTransaction,
                translateGetTokenResponse: translateGetTokenResponse,
                translateVerifyTransactionResponse: translateVerifyTransactionResponse

            }
        );

        

        

        const { reverseTransaction } = require('./reverse-transaction')(
            {
                httpClient: providers.httpClient.fetch,
                makeReverseTransactionResponse: models.makeReverseTransactionResponse,
                SEP_REVERSE_TRANSACTION_URL: SEP_REVERSE_TRANSACTION_URL
            }
        );

        const { processCallbackRequest } = require('./process-callback-request')(
            {
                isOrderShippable: isOrderShippable
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
                processCallbackRequest: processCallbackRequest
            }
        );

        return services;
    }