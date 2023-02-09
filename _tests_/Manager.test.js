const Manager = require("../lib/Manager");
test("testing ability for role of manager.", ()=> {
    const manager = new Manager("Jessica",54, "jessica@npc.com", "415");
    expect(manager.getRole()).toEqual("Manager");
});