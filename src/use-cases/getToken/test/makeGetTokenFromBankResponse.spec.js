var makeGetTokenFromBankResponse = require ('../src/makeGetTokenFromBankResponse');

const getTokenFromBankResponse = makeGetTokenFromBankResponse();

describe('GetToken: getTokenFromBankResponse', () => {
    it('get correct reponse from bank with status 1', () => {
        const response = {
            status: 1,
            token: "123456"
        }
        let token = getTokenFromBankResponse(response);
        expect(token).not.toBe(undefined);
    }),
    it('get correct reponse from bank with status -1', () => {
        const response = {
            status: -1,
            errorDesc: "Fake Error",
            errorCode : -8
        }
        expect( ()=> getTokenFromBankResponse(response)).toThrow();
    }),
    it('get incorrect reponse from bank', () => {
        const response = `
            <h1>Some invalid data from bank</h1>
        `;
        expect( ()=> getTokenFromBankResponse(response)).toThrow();
    })
})