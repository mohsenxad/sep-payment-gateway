module.exports = function makeGetTokenRequestData(terminalId){
    return function getTokenRequestData(price, orderId, RedirectUrl){
        if(!price) {
            throw new Error("Specify Price");
        }
        return Object.freeze(
            {
                "action":"token",
                "TerminalId":terminalId,
                "Amount": price,
                "ResNum": orderId,
                "RedirectUrl": RedirectUrl
            }
        )
    }
    
}