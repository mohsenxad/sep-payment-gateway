module.exports = function
(
    {
        SEP_GET_TOKEN_URL,
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
                makeGetTokenRequest: models.makeGetTokenRequest,
                makeGetTokenResponse:models.makeGetTokenResponse
            }
        )

        const services = Object.freeze(
            {
                getToken: getToken,
                makeGetTokenRequest: models.makeGetTokenRequest
            }
        );

        return services;
    }