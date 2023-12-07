var request = require('request');

module.exports = function makeGetToken(
    getTokenRequestData,
    getTokenRequestOptions,
    getTokenFromBankResponse
){
    return async function getToken(price, orderId){
        const requestData = getTokenRequestData(price, orderId, 'RedirectUrl');
        const requestOptions = getTokenRequestOptions(requestData);
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => 
                {
                    if(error){
                        reject(error);
                    }else if (!error && response.statusCode == 200) {
                        try {
                            const token = getTokenFromBankResponse(body);
                            resolve(token);
                        } catch (error) {
                            reject(error);
                        }
                    }
                }
            );
        });
    }
}