module.exports = function buildMakeVerifyTransactionRequest
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
                throw new Error('buildMakeVerifyTransactionRequest must have SEP_TERMINAL_ID.');
            }

        return function makeVerifyTransactionRequest
        (
            {
                RefNum
            }
        )
            {
                if
                (
                    !RefNum
                )
                    {
                        throw new Error('makeVerifyTransactionRequest must have RefNum.');
                    }

                function toJson()
                {

                    let jsonData = {
                        RefNum: RefNum,
                        TerminalId: SEP_TERMINAL_ID
                    };
    
                    return jsonData;
                }

                function toString()
                    {
                        return `RefNum:${RefNum}`;
                    }

                return Object.freeze(
                    {
                        getRefNum: () => RefNum,
                        toJson: toJson,
                        toString: toString,
                    }
                );
                
            }
    }