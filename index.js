require('dotenv').config();

const SEP_TERMINAL_ID = process.env.SEP_TERMINAL_ID;

const sepGateway = require('./src/use-cases')(
    {
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
);

const getTokenResponse = await sepGateway.getToken(
    {
        getTokenRequest: getTokenRequest
    }
);

const verifyTransactionRequest = sepGateway.makeVerifyTransactionRequest(
    {
        RefNum:"fake_RefNum"
    }
);

const verifyTransactionResponse = await sepGateway.verifyTransaction(
    {
        verifyTransactionRequest:verifyTransactionRequest
    }
);

const reverseTransactionRequest = sepGateway.makeReverseTransactionRequest(
    {
        RefNum: "fake_RefNum"
    }
);

const reverseTransactionResponse = await sepGateway.reverseTransaction(
    {
        reverseTransactionRequest: reverseTransactionRequest
    }
);