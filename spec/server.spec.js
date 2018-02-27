import { request } from 'https';

var require = require('request')

describe('calc', () => {
    it('should multiply 3 and 3', () =>{
        expect(3*3).toBe(9)
    })
})

describe('get messages', () =>{
    it('should return 200 Ok', (done) => {
        request.get('http://localhost:3000/messages', (err, res) => {
            console.log(res.body)
            done()
        })

    })
})