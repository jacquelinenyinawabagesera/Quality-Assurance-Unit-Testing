
const { default: expect } = require('expect')
const {isEven} = require('./numbers')

test('test if 8 is even', ()=> {
    expect(isEven(8)).toBe(true)
})