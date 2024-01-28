module.exports = function
()
    {
        const request  = require('./requestHttpClient')()
        const fetch = require('./fetchHttpClient')();

        const services = Object.freeze(
            {
                request: request,
                fetch: fetch,
                //proxyFetch: proxyFetchHttpClientServices
            }
        );

        return services;
    }