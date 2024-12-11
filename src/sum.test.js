const sum = require('./sum');

test("testing whether 10 and 20 add to 30",()=>{
    expect(sum(10,20)).toBe(30)
})