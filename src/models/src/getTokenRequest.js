module.exports = function buildMakeGetTokenRequest
(
    {
        SEP_TERMINAL_ID
    }
)
    {
        if
        (
            !SEP_TERMINAL_ID
        )
            {
                throw new Error('buildMakeGetTokenRequest must have SEP_TERMINAL_ID.');
            }
            
        return function makeGetTokenRequest
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
                    typeof Amount != "number"
                )
                    {
                        throw new Error('makeGetTokenRequest>Amount must have number.');
                    }

                if
                (
                    !ResNum
                )
                    {
                        throw new Error('makeGetTokenRequest must have ResNum.');
                    }

                if
                (
                    !RedirectURL
                )
                    {
                        throw new Error('makeGetTokenRequest must have RedirectURL.');
                    }

                let jsonData = {
                    action: "token",
                    TerminalId: SEP_TERMINAL_ID,
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
    }