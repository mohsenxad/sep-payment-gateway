module.exports = function createGetTokenRequest
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
                throw new Error('createGetTokenRequest must have Amount.');
            }
        else if
        (
            typeof Amount != "number"
        )
            {
                throw new Error('createGetTokenRequest>Amount must have number.');
            }

        if
        (
            !ResNum
        )
            {
                throw new Error('createGetTokenRequest must have ResNum.');
            }

        if
        (
            !RedirectURL
        )
            {
                throw new Error('createGetTokenRequest must have RedirectURL.');
            }

        let jsonData = {
            action: "token",
            Amount: Amount,
            ResNum: ResNum,
            RedirectURL: RedirectURL,
            TokenExpiryInMin: TokenExpiryInMin
        };

        if
        (
            Wage  
        )
            {
                jsonData.Wage = Wage
            }

        if
        (
            CellNumber  
        )
            {
                jsonData.CellNumber = CellNumber
            }


        return jsonData; 

    }