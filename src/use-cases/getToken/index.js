

const buildGetToken = require('./src/getToken');
const buildCreateGetTokenRequest = require('./src/create-getToken-request');
const buildTranslateGetTokenResponse = require('./src/translate-getToke-response');
  
module.exports  = function
(
    {
        httpClient,
        SEP_GET_TOKEN_URL,
        makeGetTokenRequest,
        makeGetTokenResponse
    }
)
    {

        const createGetTokenRequest = buildCreateGetTokenRequest(
            {
                makeGetTokenRequest: makeGetTokenRequest
            }
        );

        const translateGetTokenResponse = buildTranslateGetTokenResponse(
            {
                makeGetTokenResponse: makeGetTokenResponse
            }
        );

        const getToken = buildGetToken(
            {
                httpClient: httpClient,
                createRequest: createGetTokenRequest,
                translateResponse: translateGetTokenResponse,
                SEP_GET_TOKEN_URL: SEP_GET_TOKEN_URL
            }
        );

        const services = Object.freeze(
            {
                getToken,
            }
        );

        return services;
    }