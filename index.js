require('dotenv').config();

const SEP_GET_TOKEN_URL = process.env.SEP_GET_TOKEN_URL;
const SEP_TERMINAL_ID = process.env.SEP_TERMINAL_ID;

const sepGateway = require('./src/use-cases')(
    {
        SEP_GET_TOKEN_URL: SEP_GET_TOKEN_URL,
        SEP_TERMINAL_ID: SEP_TERMINAL_ID,
    }
);

console.log(sepGateway);

const getTokenRequest = sepGateway.makeGetTokenRequest(
    {
        Amount:5000,
        ResNum:"tR43",
        RedirectURL:"heeloo.com"
    }
)

sepGateway.getToken(
    {
        getTokenRequest: getTokenRequest
    }
);