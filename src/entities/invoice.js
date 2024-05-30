module.exports = function makeInvoice
(
    {
        Amount,
        ResNum,
        RedirectURL,
        Wage,
        CellNumber,
        TokenExpiryInMin = 20
    }
)
    {
        if
        (
            !Amount
        )
            {
                throw new Error('مبلغ را وارد کنید.',{cause:'makeInvoice must have Amount'});
            }
        else if
        (
            typeof Amount != "number"
        )
            {
                throw new Error('مبلغ را به عدد وارد کنید.',{cause:'makeInvoice>Amount must be as number.'});
            }

        else if
        (
            Amount < 1000
        )
            {
                throw new Error('مبلغ نمیتواند کمتر از 1000 ريال باشد.',{cause:`makeInvoice>Amount must be above 1000 R| current value is ${Amount}.`});
            }

        if
        (
            !ResNum
        )
            {
                throw new Error('makeInvoice must have ResNum.');
            }

        if
        (
            !RedirectURL
        )
            {
                throw new Error('makeInvoice must have RedirectURL.');
            }

        return Object.freeze(
            {
                getAmount: () => Amount,
                getResNum: () => ResNum,
                getRedirectURL: () => RedirectURL,
                getWage:()=>Wage,
                getCellNumber: ()=> CellNumber,
                getTokenExpiryInMin: () => TokenExpiryInMin,
               
            }
        );
    }