var makeGetTokenRequestData = require ('../src/makeGetTokenRequestData');

const getTokenRequestData = makeGetTokenRequestData("123");

describe('getTokenRequestData', () => {
    it('create get token request data', () => {
        const price = 12000;
        const orderId = "1qaz@WSX2";
        const RedirectUrl = 'mohsen.xad';
        let requestData = getTokenRequestData(price, orderId, RedirectUrl);
        expect(requestData).not.toBe(undefined);
    }),
    it('create get token request data with invalid data', () => {
        const price = undefined;
        const orderId = "1qaz@WSX2";
        const RedirectUrl = 'mohsen.xad';
        expect( ()=> getTokenRequestData(price, orderId, RedirectUrl)).toThrow();
    })
})