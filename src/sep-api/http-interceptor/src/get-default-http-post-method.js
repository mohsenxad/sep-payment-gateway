module.exports = function buildGetDefaultHTTPPostMethod()
    {
        const https = require('https');

        if
        (
            !https
        )
            {
                throw new Error(`Your node version doese'nt support https module. create a custome http post client method`);
            }

        return function getDefaultHTTPPostMethod()
            {
                return async function(
                    {
                        hostname,
                        path,
                        headers,
                        body
                    } 
                )
                    {
                        if
                        (
                            !hostname
                        )
                            {
                                throw new Error(`http post request must have hostname`);
                            }

                        if
                        (
                            !path
                        )
                            {
                                throw new Error(`http post request must have path`);
                            }

                        if
                        (
                            !headers
                        )
                            {
                                throw new Error(`http post request must have headers`);
                            }

                        if
                        (
                            !body
                        )
                            {
                                throw new Error(`http post request must have body`);
                            }

                        const requestOptions = {
                            method: 'POST',
                            headers: headers,
                            body: body,
                            hostname: hostname,
                            path: path
                        };

                        return new Promise(
                            (
                                resolve,
                                reject
                            )=>
                                {
                                    

                                    const req = https.request
                                    (
                                        requestOptions,
                                        res =>
                                            {
 
                                                let data = '';

                                                res.on(
                                                    'data',
                                                    (chunk) =>
                                                        {
                                                            data += chunk;
                                                        }
                                                );

                                                res.on(
                                                    'end',
                                                    () =>
                                                        {
                                                            const result = {
                                                                headers: res.headers,
                                                                data:data
                                                            }
                                                            resolve(result);
                                                        }
                                                )
                                            }
                                    );

                                    req.on('error',reject);

                                    req.write(body);
                                    
                                    req.end();
                                }
                        )
                    }
                
            }

    }