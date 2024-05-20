require('dotenv').config();

const SEP_TERMINAL_ID = process.env.SEP_TERMINAL_ID;

function isOrderShippable(
    {
        newValidPaymentInfo
    }
)
    {
        return true;
    }

const sepGateway = require('./src/use-cases')(
    {
        SEP_TERMINAL_ID: SEP_TERMINAL_ID,
        isOrderShippable: isOrderShippable
    }
);
console.log(sepGateway);

// async function getToken(){
//     try {
//         const getTokenRequest = sepGateway.makeGetTokenRequest(
//             {
//                 Amount:5000,
//                 ResNum:"tR43",
//                 RedirectURL:"heeloo.com"
//             }
//         )
        
//         const token = await getTokenRequest.getToken();
//         const goToShaparakHTMLPage = await getTokenRequest.getGoToShaparakHTMLPage();

//         console.log(token);
//         console.log(goToShaparakHTMLPage);
//     } catch (error) {
//         console.log(error.message);
//     }
   
// }


// getToken();


// sepGateway.processCallbackRequest(
//     {
//         body: {},
//         headers:{}
//     }
// )

// const getTokenResponse = await sepGateway.getToken(
//     {
//         getTokenRequest: getTokenRequest
//     }
// );





async function verifyTransaction
()
    {
        const verifyTransactionRequest = sepGateway.makeVerifyTransactionRequest(
            {
                RefNum:"fake_RefNum"
            }
        );

        console.log(verifyTransactionRequest.toString())

        const verifyTransactionResponse = await sepGateway.verifyTransaction(
            {
                verifyTransactionRequest:verifyTransactionRequest
            }
        );

        console.log(verifyTransactionResponse)
    }

verifyTransaction()






// async function reverse
// ()
//     {
//         const reverseTransactionRequest = sepGateway.makeReverseTransactionRequest(
//             {
//                 RefNum: "fake_RefNum"
//             }
//         );
        
//         const reverseTransactionResponse = await sepGateway.reverseTransaction(
//             {
//                 reverseTransactionRequest: reverseTransactionRequest
//             }
//         );
//     }

// reverse();

