const jobs = require('./jobs')

test("test whether the jobs list contain something with a pilot ",()=>{
    const job = jobs.map((unq)=>unq.job)
    expect(job).toContain("pilot");
    expect(job).toContain("dev")
})