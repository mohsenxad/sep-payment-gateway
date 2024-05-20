const buildMakeMaskedPan= require('./src/masked-pan');
const buildMakeTransactionDetail = require('./src/transaction-detail');


module.exports = function
(
    {
        TERMINAL_ID,
        makeRefNum
    }
)
    {

        const makeMaskedPan= buildMakeMaskedPan();

        const makeTransactionDetail = buildMakeTransactionDetail(
            {
                makeMaskedPan: makeMaskedPan,
                TERMINAL_ID: TERMINAL_ID,
                makeRefNum: makeRefNum
            }
        );
        
        const services = Object.freeze(
            {
                makeTransactionDetail
            }
        );

        return services;
    }