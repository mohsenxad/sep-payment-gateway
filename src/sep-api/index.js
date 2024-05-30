
const SEP_HOST = 'sep.shaparak.ir';
const SEP_GET_TOKEN_PATH = '/onlinepg/onlinepg';
const SEP_VERIFY_TRANSACTION_URL= 'https://sep.shaparak.ir/verifyTxnRandomSessionkey/ipg/VerifyTransaction';
const SEP_REVERSE_TRANSACTION_URL = 'https://sep.shaparak.ir/verifyTxnRandomSessionkey/ipg/ReverseTransaction';

module.exports = function
(
    {
        customizedHTTPPostMethod,
        SEP_TERMINAL_ID
    }
)
    {
        const httpClientPostInterceptor = require('./http-interceptor')(
            {
                customizedHTTPPostMethod: customizedHTTPPostMethod,
                SEP_TERMINAL_ID: SEP_TERMINAL_ID,
                SEP_HOST: SEP_HOST
            }
        );

        const getToken = require('./getToken')(
            {
                SEP_GET_TOKEN_PATH: SEP_GET_TOKEN_PATH,
                httpClientPostInterceptor: httpClientPostInterceptor
            }
        );

        const verifyTransaction = require('./verify-transaction')(
            {
                SEP_VERIFY_TRANSACTION_URL: SEP_VERIFY_TRANSACTION_URL,
                httpClientPostInterceptor: httpClientPostInterceptor
            }
        );

        const reverseTransaction = require('./reverse-transaction')(
            {
                SEP_REVERSE_TRANSACTION_URL: SEP_REVERSE_TRANSACTION_URL,
                httpClientPostInterceptor: httpClientPostInterceptor
            }
        )

        const sepAPI = Object.freeze(
            {
                getToken,
                verifyTransaction,
                reverseTransaction
            }
        );

        return sepAPI;
    } 