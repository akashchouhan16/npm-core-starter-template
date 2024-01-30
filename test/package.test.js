// ------------------------------------------------
// author: @github.com/akashchouhan16
// ------------------------------------------------

const { myPackage } = require('../lib/package')

describe('myPackage:: Test Suite', () => {
    test('Package must be defined', () => {
        expect(myPackage).toBeDefined()
        expect(myPackage).toStrictEqual(expect.any(Function))
    })
})