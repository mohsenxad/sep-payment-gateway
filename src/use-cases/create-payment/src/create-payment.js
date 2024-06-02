
const buildGetPaymentRedirectHTMLPage = require('./get-payment-redirect-html-page');
const buildGetPaymentUrl = require('./get-payment-ulr');


module.exports = function buildCreatePayment
(
    getTokenApi
)
    {
        if
        (
            !getTokenApi
        )
            {
                throw new Error('buildCreatePayment must have getTokenApi.');
            }

           
        return async function createPayment
        (
            invoice
        )
            {

                const { status, token } = await getTokenApi(
                    {
                        Amount: invoice.getAmount(),
                        ResNum: invoice.getResNum(),
                        RedirectURL: invoice.getRedirectURL(),
                        Wage: invoice.getWage(),
                        CellNumber: invoice.getCellNumber(),
                        TokenExpiryInMin:invoice.getTokenExpiryInMin()
                    }
                );

                const getPaymentRedirectHTMLPage = buildGetPaymentRedirectHTMLPage(token);

                const getPaymentUrl = buildGetPaymentUrl(token);


                const result = Object.freeze(
                    {
                        getPaymentUrl: getPaymentUrl,
                        getPaymentRedirectHTMLPage: getPaymentRedirectHTMLPage,
                        getStatus: ()=> status,
                        getToken: ()=> token
                    }
                );

                return result;

            }
    }