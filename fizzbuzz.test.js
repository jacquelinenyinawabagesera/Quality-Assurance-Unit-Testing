const{fizzBuzz} = require ("./fizzbuzz")

test('return fizz, buzz or fizzbuzz according to input', ()=> {
expect(fizzBuzz(15)) .toBe("FizzBuzz");
expect(fizzBuzz(3)).toBe("Fizz")
expect(fizzBuzz(10)).toBe("Buzz")
})