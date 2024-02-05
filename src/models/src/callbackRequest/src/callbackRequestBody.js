module.exports = function buildMakeCallbackRequestBody
(
    {
        TERMINAL_ID
    }
)
    {
        if
        (
            !TERMINAL_ID
        )
            {
                throw new Error('buildMakeCallbackRequestBody must have TERMINAL_ID.');
            }

        return function makeCallbackRequestBody
        (
            {
                Token,
                ResNum,
                RefNum,
                TraceNo,
                State,
                Status,
                TerminalId,
                MID,
                Rrn,
                Amount,
                Wage,
                AffectiveAmount,
                SecurePan
            }
        )
            {
                if
                (
                    !Token
                )
                    {
                        throw new Error('makeCallbackRequestBody must have Token.');
                    }

                if
                (
                    !ResNum
                )
                    {
                        throw new Error('makeCallbackRequestBody must have ResNum.');
                    }

                if
                (
                    !RefNum
                )
                    {
                        throw new Error('makeCallbackRequestBody must have RefNum.');
                    }

                if
                (
                    !TraceNo
                )
                    {
                        throw new Error('makeCallbackRequestBody must have TraceNo.');
                    }

                if
                (
                    !State
                )
                    {
                        throw new Error('makeCallbackRequestBody must have State.');
                    }

                if
                (
                    !Status
                )
                    {
                        throw new Error('makeCallbackRequestBody must have Status.');
                    }

                if
                (
                    !TerminalId
                )
                    {
                        throw new Error('makeCallbackRequestBody must have TerminalId.');
                    }

                if
                (
                    !MID
                )
                    {
                        throw new Error('makeCallbackRequestBody must have MID.');
                    }

                if
                (
                    !Rrn
                )
                    {
                        throw new Error('makeCallbackRequestBody must have Rrn.');
                    }

                if
                (
                    !Amount
                )
                    {
                        throw new Error('makeCallbackRequestBody must have Amount.');
                    }

                if
                (
                    !SecurePan
                )
                    {
                        throw new Error('makeCallbackRequestBody must have SecurePan.');
                    }

                
            }
    }