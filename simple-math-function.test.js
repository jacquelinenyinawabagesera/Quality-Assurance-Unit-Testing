

const {subtract,multiply,divide,add} = require("./simple-math-functions");

test('adds 2 and 5 to  equal to 7', ()=>{
    expect(add(2,5)).toBe(7);
});

test('subtract 8 and 4 to equal to 4', ()=>{
    expect(subtract(8,4)).toBe(4);
})

test('multiply 5 and 2 to equal to 10', ()=>{
    expect(multiply(5,2)).toBe(10);
})

test(' provide the division of two values', () =>{
    expect(divide(8,2)).toBe(4);
    expect(()=> divide(5,0)).toThrow('Cannot divide by zero')
 });