const buildMakeGetTokenResponse = require('../src/getTokenResponse');
const makeGetTokenResponse = buildMakeGetTokenResponse();

describe
(
    'makeGetTokenResponse',
    () =>
        {
            it('should throw an error if status is not a number', () => {
            expect(() => {
                makeGetTokenResponse({
                status: 'not a number',
                token: 'some token'
                })
            }).toThrowError('makeGetTokenResponse>status must be number.')
            })
        
            it('should throw an error if token is not provided', () => {
            expect(() => {
                makeGetTokenResponse({
                status: 200
                })
            }).toThrowError('makeGetTokenResponse must have token.')
            })
        
            it
            (
                'should return a frozen object with getStatus, getToken, toJson, and toString methods',
                () =>
                    {
                        const response = makeGetTokenResponse(
                            {
                                status: 200,
                                token: 'some token'
                            }
                        )
                    
                        expect(Object.isFrozen(response)).toBe(true)
                        expect(response.getStatus()).toBe(200)
                        expect(response.getToken()).toBe('some token')
                        expect(response.toJson()).toEqual({
                            status: 200,
                            token: 'some token'
                        })
                        expect(response.toString()).toBe('status:200| token:some token')
                    }
            )
        }
)