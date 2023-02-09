const Engineer= require("./lib/Engineer");
test("testing employee skill to add github user ID with the engineer class", ()=>{
const testValue = "usertest";
const username = new Engineer("Jonathen",42,"jonathen@npctest.com", testValue);
expect(username.github).toBe(testValue);
});
    
   