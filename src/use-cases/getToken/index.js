

const buildGetToken = require('./src/getToken');
const buildCreateGetTokenRequest = require('./src/create-getToken-request');
const buildTranslateGetTokenResponse = require('./src/translate-getToke-response');
  
module.exports  = function
(
    {
        httpClient,
        SEP_GET_TOKEN_URL
    }
)
    {

        // const createGetTokenRequest = buildCreateGetTokenRequest();

        const translateGetTokenResponse = buildTranslateGetTokenResponse();

        const getToken = buildGetToken(
            {
                httpClient: httpClient,
                // createRequest: createGetTokenRequest,
                // translateResponse: translateGetTokenResponse,
                SEP_GET_TOKEN_URL: SEP_GET_TOKEN_URL
            }
        );

        const services = Object.freeze(
            {
                getToken,
                translateGetTokenResponse
            }
        );

        return services;
    }