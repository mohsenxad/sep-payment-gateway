module.exports = function buildMakeReverseTransactionRequest
(
    {
        TERMINAL_ID,
        makeRefNum
    }
)
    {
        if
        (
            !TERMINAL_ID
        )
            {
                throw new Error('buildMakeReverseTransactionRequest must have TERMINAL_ID.');
            }

        if
        (
            !makeRefNum
        )
            {
                throw new Error('buildMakeReverseTransactionRequest must have makeRefNum.');
            }

        return function makeReverseTransactionRequest
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
                        throw new Error('makeReverseTransactionRequest must have RefNum.');
                    }

                const refNumObject = makeRefNum(
                    {
                        refNumValue: RefNum
                    }
                )

                function toJson()
                {

                    let jsonData = {
                        RefNum: refNumObject.getRefNum(),
                        TerminalId: TERMINAL_ID
                    };
    
                    return jsonData;
                }

                function toString()
                    {
                        return `RefNum:${refNumObject.getRefNum()}`;
                    }

                return Object.freeze(
                    {
                        getRefNum: () => refNumObject.getRefNum(),
                        toJson: toJson,
                        toString: toString,
                    }
                );

            }
    }