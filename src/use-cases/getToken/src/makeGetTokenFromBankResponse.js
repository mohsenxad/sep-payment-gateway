module.exports = function makeGetTokenFromBankResponse(){
    return function getTokenFromBankResponse(responseBody){
        try {
            if(
                responseBody.status == 1 &&
                responseBody.token
            ){
                return responseBody.token;
            }else if(
                responseBody.status == -1 &&
                responseBody.errorDesc &&
                responseBody.errorCode
            ){
                throw new Error(responseBody.errorDesc);   
            }else{
                throw new Error(`Unkown Response: ${responseBody.toString()}`);
            }
        } catch (error) {
            throw error;  
        }
    }
}