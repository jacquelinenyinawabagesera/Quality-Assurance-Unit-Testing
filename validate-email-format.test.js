const {isValidEmail} = require("./validate-email-format");
test('if an email has the right syntax', ()=>{
    expect(isValidEmail('daniella@gmail.com')).toBe(true);
});