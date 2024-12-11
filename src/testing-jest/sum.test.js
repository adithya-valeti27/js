const sum = require('./sum')

test("test whether 10, 20 ,30 add upto 60",()=>{
    expect(sum(10,20,30)).toBe(60)
})