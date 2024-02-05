module.exports = function buildMakeMaskedPan
()
    {
        return function makeMaskedPan
        (
            {
                maskedPanValue
            }
        )
            {
                if
                (
                    !maskedPanValue
                )
                    {
                        throw new Error('makeMaskedPan must have maskedPanValue.');
                    }
                else if
                (
                    maskedPanValue.length != 14
                )
                    {
                        throw new Error('makeMaskedPan > maskedPanValue must have 14 characters length.');
                    }

                return Object.freeze(
                    {
                        getMaskedPan: () => maskedPanValue
                    }
                );
            }
    }