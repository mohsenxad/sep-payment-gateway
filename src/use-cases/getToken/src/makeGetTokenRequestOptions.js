module.exports = function makeGetTokenRequestOptions(proxyUrl){
    return function getTokenRequestOptions(jsonData){
        return Object.freeze(
            {
                url:'https://sep.shaparak.ir/onlinepg/onlinepg',
                method: 'POST',
                proxy: proxyUrl,
                json: jsonData
            }
        )
    }
}