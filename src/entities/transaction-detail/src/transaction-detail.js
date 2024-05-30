module.exports = function buildMakeTransactionDetail
(
    {
        makeMaskedPan,
        SEP_TERMINAL_ID,
        makeRefNum
    }
)
    {
        if
        (
            !makeMaskedPan
        )
            {
                throw new Error('buildMakeTransactionDetail must have makeMaskedPan.');
            }

        if
        (
            !SEP_TERMINAL_ID
        )
            {
                throw new Error('buildMakeTransactionDetail must have SEP_TERMINAL_ID.');
            }

        if
        (
            !makeRefNum
        )
            {
                throw new Error('buildMakeTransactionDetail must have makeRefNum.');
            }

        return function makeTransactionDetail
        (
            {
                RRN,
                RefNum,
                MaskedPan,
                HashedPan,
                TerminalNumber,
                OrginalAmount,
                AffectiveAmount,
                StraceDate,
                StraceNo
            }
        )
            {
                if
                (
                    !RRN
                )
                    {
                        throw new Error('makeTransactionDetail must have RRN.');
                    }

                if
                (
                    !RefNum
                )
                    {
                        throw new Error('makeTransactionDetail must have RefNum.');
                    }

                const refNumObject = makeRefNum(
                    {
                        refNumValue: RefNum
                    }
                );

                if
                (
                    !MaskedPan
                )
                    {
                        throw new Error('makeTransactionDetail must have MaskedPan.');
                    }

                const maskedPanObject = makeMaskedPan(
                    {
                        maskedPanValue: MaskedPan
                    }
                );

                if
                (
                    !HashedPan
                )
                    {
                        throw new Error('makeTransactionDetail must have HashedPan.');
                    }

               

                if
                (
                    !TerminalNumber
                )
                    {
                        throw new Error('makeTransactionDetail must have TerminalNumber.');
                    }
                else if
                (
                    TerminalNumber != SEP_TERMINAL_ID
                )
                    {
                        throw new Error('makeTransactionDetail > TerminalNumber is not equal to setting SEP_TERMINAL_ID.');
                    }

                if
                (
                    !OrginalAmount
                )
                    {
                        throw new Error('makeTransactionDetail must have OrginalAmount.');
                    }

                if
                (
                    !AffectiveAmount
                )
                    {
                        throw new Error('makeTransactionDetail must have AffectiveAmount.');
                    }

                if
                (
                    !StraceDate
                )
                    {
                        throw new Error('makeTransactionDetail must have StraceDate.');
                    }

                if
                (
                    !StraceNo
                )
                    {
                        throw new Error('makeTransactionDetail must have StraceNo.');
                    }
            }
    }