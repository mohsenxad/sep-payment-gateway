module.exports = function buildMakeRefNum
()
    {
        return function makeRefNum
        (
            {
                refNumValue
            }
        )
            {
                if
                (
                    !refNumValue
                )
                    {
                        throw new Error('makeRefNum must have refNumValue.');
                    }
                else if
                (
                    refNumValue.length > 50
                )
                    {
                        throw new Error('makeRefNum > refNumValue must have under 50 characters length.');
                    }

                return Object.freeze(
                    {
                        getRefNum: () => refNumValue
                    }
                );
            }
    }