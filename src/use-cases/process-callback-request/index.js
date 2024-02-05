const buildProcessCallbackRequest = require('./src/process-callback-request');

module.exports = function
()
    {

        const processCallbackRequest = buildProcessCallbackRequest();

        const services = Object.freeze(
            {
                processCallbackRequest
            }
        );

        return services;
    }