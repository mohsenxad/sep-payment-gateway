const buildMakeGetTokenRequest = require('./src/getTokenRequest');
const buildMakeGetTokenResponse= require('./src/getTokenResponse');

const buildMakeVerifyTransactionRequest= require('./src/verifyTransactionRequest');
const buildMakeVerifyTransactionResponse = require('./src/verifyTransactionResponse');

const buildMakeReverseTransactionRequest = require('./src/reverseTransactionRequest');
const buildMakeReverseTransactionResponse = require('./src/reverseTransactionResponse');

module.exports = function
(
    {
        SEP_TERMINAL_ID
    }
)
    {
        const makeGetTokenRequest = buildMakeGetTokenRequest(
            {
                SEP_TERMINAL_ID: SEP_TERMINAL_ID
            }
        );
        const makeGetTokenResponse = buildMakeGetTokenResponse();

        const makeVerifyTransactionRequest = buildMakeVerifyTransactionRequest(
            {
                SEP_TERMINAL_ID: SEP_TERMINAL_ID
            }
        );
        const makeVerifyTransactionResponse= buildMakeVerifyTransactionResponse();

        const makeReverseTransactionRequest = buildMakeReverseTransactionRequest(
            {
                SEP_TERMINAL_ID: SEP_TERMINAL_ID
            }
        );
        const makeReverseTransactionResponse= buildMakeReverseTransactionResponse();

        const { makeCallbackRequest } = require('./src/callbackRequest')(
            {
                TERMINAL_ID: SEP_TERMINAL_ID
            }
        );

        const services = Object.freeze(
            {
                makeGetTokenRequest,
                makeGetTokenResponse,
                makeVerifyTransactionRequest,
                makeVerifyTransactionResponse,
                makeReverseTransactionRequest,
                makeReverseTransactionResponse,
                makeCallbackRequest
            }
        );

        return services;
    }