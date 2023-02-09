const Intern = require("./lib/Intern");
test("testing trial for Intern role",()=>{
    const intern = new Intern  ("Tony", 669, "tony@npc.com", "GVSU");
    expect(intern.getRole()).toEqual("Intern")
});