const {reverseString} = require("./reverse-string")
    test('given hello', () => {
        expect(reverseString('tree')).toBe('eert');
    });  