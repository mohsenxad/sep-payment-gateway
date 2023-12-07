var makeGetTokenRequestData = require ('../src/makeGetTokenRequestData');
var makeGetTokenRequestOptions = require('../src/makeGetTokenRequestOptions');

const getTokenRequestData = makeGetTokenRequestData("123");
const getTokenRequestOptions = makeGetTokenRequestOptions(undefined);

describe('payment', () => {
    it('create get token request options', () => {
        const price = 12000;
        const orderId = "1qaz@WSX2"
        const requestData = getTokenRequestData(price, orderId, 'RedirectUrl');
        const requestOptions = getTokenRequestOptions(requestData);
        expect(requestOptions).not.toBe(undefined);
    })
})