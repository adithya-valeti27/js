const namesList = require('./namesList')

test("test whether there is a name with Kalyani in the list",()=>{
    const personsName = namesList.map((person)=>person.name);
    expect(personsName).toContain("Kalyani")
})