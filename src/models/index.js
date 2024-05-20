const buildMakeGetTokenRequest = require('./src/getTokenRequest');
const buildMakeGetTokenResponse= require('./src/getTokenResponse');

const buildMakeVerifyTransactionRequest= require('./src/verifyTransactionRequest');
const buildMakeVerifyTransactionResponse = require('./src/verifyTransactionResponse');

const buildMakeReverseTransactionRequest = require('./src/reverseTransactionRequest');
const buildMakeReverseTransactionResponse = require('./src/reverseTransactionResponse');

const buildMakeRefNum = require('./src/ref-num');

const buildMakeVerifiedTransaction = require('./src/verifiedTransaction');

module.exports = function
(
    {
        TERMINAL_ID,
        getTokenFromApi,
        verifyTransactionFromApi,
        translateGetTokenResponse,
        translateVerifyTransactionResponse
    }
)
    {

        // function getTokenFromApi(options){
        //     console.log(options);
        // }

        const makeRefNum = buildMakeRefNum();

        const makeGetTokenResponse = buildMakeGetTokenResponse();

        const makeVerifiedTransaction = buildMakeVerifiedTransaction(
            {
                TERMINAL_ID: TERMINAL_ID,
                makeReversedTransaction: makeReversedTransaction,
                reverseTransaction: ()=>{},
                translateVerifyTransactionResponse: ()=>{}
            }
        );
        
        const makeGetTokenRequest = buildMakeGetTokenRequest(
            {
                TERMINAL_ID: TERMINAL_ID,
                getTokenFromApi: getTokenFromApi,
                translateGetTokenResponse: translateGetTokenResponse,
                makeGetTokenResponse: makeGetTokenResponse
            }
        );
        

        const makeVerifyTransactionRequest = buildMakeVerifyTransactionRequest(
            {
                TERMINAL_ID: TERMINAL_ID,
                makeRefNum: makeRefNum,
                translateVerifyTransactionHttpResponse: translateVerifyTransactionResponse,
                verifyTransactionFromApi: verifyTransactionFromApi
            }
        );
        const makeVerifyTransactionResponse= buildMakeVerifyTransactionResponse();



        const makeReverseTransactionRequest = buildMakeReverseTransactionRequest(
            {
                TERMINAL_ID: TERMINAL_ID,
                makeRefNum: makeRefNum
            }
        );

        const makeReverseTransactionResponse= buildMakeReverseTransactionResponse();

        const { makeCallbackRequest } = require('./src/callbackRequest')(
            {
                TERMINAL_ID: TERMINAL_ID,
                makeVerifiedTransaction: makeVerifiedTransaction
            }
        );

        const { makeTransactionDetail } = require('./src/transaction-detail')(
            {
                TERMINAL_ID: TERMINAL_ID,
                makeRefNum: makeRefNum
            }
        )

        const services = Object.freeze(
            {
                makeGetTokenRequest,
                makeGetTokenResponse,
                makeVerifyTransactionRequest,
                makeVerifyTransactionResponse,
                makeReverseTransactionRequest,
                makeReverseTransactionResponse,
                makeCallbackRequest,
                makeTransactionDetail
            }
        );

        return services;
    }