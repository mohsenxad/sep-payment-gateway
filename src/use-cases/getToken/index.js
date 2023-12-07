require('dotenv').config();

const terminalId = process.env.TERMINAL_ID;
const proxyUrl = process.env.PROXY_URL;



var makeGetTokenRequestData = require ('./src/makeGetTokenRequestData');
var makeGetTokenRequestOptions = require ('./src/makeGetTokenRequestOptions');
var makeGetTokenFromBankResponse = require ('./src/makeGetTokenFromBankResponse');
var makeGetToken = require('./src/makeGetToken');

const getTokenRequestData = makeGetTokenRequestData(terminalId);
const getTokenRequestOptions = makeGetTokenRequestOptions(proxyUrl);
const getTokenFromBankResponse = makeGetTokenFromBankResponse();
const getToken = makeGetToken(
    getTokenRequestData,
    getTokenRequestOptions,
    getTokenFromBankResponse
);


const getTokenService = Object.freeze(
    {
        getToken,
    }
);

 
  
module.exports  = getTokenService;