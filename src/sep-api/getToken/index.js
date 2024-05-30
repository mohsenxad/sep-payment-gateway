const createGetTokenRequest = require('./src/createGetTokenRequest');
const translateGetTokenResponse = require('./src/translateGetTokenResponse');
const buildGetToken = require('./src/getToken');

module.exports = function
(
    {
        SEP_GET_TOKEN_PATH,
        httpClientPostInterceptor
    }
)
    {
        const getToken = buildGetToken(
            {
                SEP_GET_TOKEN_PATH: SEP_GET_TOKEN_PATH,
                createGetTokenRequest: createGetTokenRequest,
                httpClientPostInterceptor: httpClientPostInterceptor,
                translateGetTokenResponse:translateGetTokenResponse
            }
        );

        return getToken;

    }