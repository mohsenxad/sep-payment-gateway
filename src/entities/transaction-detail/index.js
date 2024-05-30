const makeMaskedPan= require('./src/masked-pan');
const buildMakeTransactionDetail = require('./src/transaction-detail');


module.exports = function
(
    {
        SEP_TERMINAL_ID,
        makeRefNum
    }
)
    {

        const makeTransactionDetail = buildMakeTransactionDetail(
            {
                makeMaskedPan: makeMaskedPan,
                SEP_TERMINAL_ID: SEP_TERMINAL_ID,
                makeRefNum: makeRefNum
            }
        );
        
        return makeTransactionDetail;
    }