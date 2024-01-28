module.exports = function
()
    {
        const httpClientServices = require('./httpClient')();
        
        const services = Object.freeze(
            {
                httpClient: httpClientServices
            }
        );

        return services;
    }