const buildProcessCallbackRequest = require('./src/process-callback-request');

module.exports = function
(
    {
        isOrderShippable
    }
)
    {

        const processCallbackRequest = buildProcessCallbackRequest(
            {
                isOrderShippable: isOrderShippable
            }
        );

        const services = Object.freeze(
            {
                processCallbackRequest
            }
        );

        return services;
    }