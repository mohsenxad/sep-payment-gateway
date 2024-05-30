module.exports = function buildGetPaymentRedirectHTMLPage
(
    token
)
    {
        if
        (
            !token
        )
            {
                throw new Error('getPaymentRedirectHTMLPage must have token.');
            }

        return function getPaymentRedirectHTMLPage()
            {
                const htmlContent = `<form onload="document.forms['forms'].submit()" action="https://sep.shaparak.ir/OnlinePG/OnlinePG" method="post"><input type="hidden" name="Token" value="2c3c1fefac5a48geb9f9be7e445dd9b2" /><input name="GetMethod" type="text" value="true"></form>`;
                
                return htmlContent;        
            }

        
    }