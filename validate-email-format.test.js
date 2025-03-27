const {isValidEmail} = require("./validate-email-format");
test('Validates an email as user@gmail.com', ()=>{
    expect(isValidEmail('daniella@gmail.com')).toBe(true);
});