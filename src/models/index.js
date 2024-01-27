const buildMakeGetTokenRequest = require('./src/getTokenRequest');
const buildMakeGetTokenResponse= require('./src/getTokenResponse');

const buildMakeVerifyTransactionRequest= require('./src/verifyTransactionRequest');
const buildMakeVerifyTransactionResponse = require('./src/verifyTransactionResponse');

const buildMakeReverseTransactionRequest = require('./src/reverseTransactionRequest');
const buildMakeReverseTransactionResponse = require('./src/reverseTransactionResponse');

module.exports = function
()
    {
        const makeGetTokenRequest = buildMakeGetTokenRequest();
        const makeGetTokenResponse = buildMakeGetTokenResponse();

        const makeVerifyTransactionRequest = buildMakeVerifyTransactionRequest();
        const makeVerifyTransactionResponse= buildMakeVerifyTransactionResponse();

        const makeReverseTransactionRequest = buildMakeReverseTransactionRequest();
        const makeReverseTransactionResponse= buildMakeReverseTransactionResponse();

        const services = Object.freeze(
            {
                makeGetTokenRequest,
                makeGetTokenResponse,
                makeVerifyTransactionRequest,
                makeVerifyTransactionResponse,
                makeReverseTransactionRequest,
                makeReverseTransactionResponse

            }
        );

        return services;
    }