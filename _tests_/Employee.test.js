const Employee = require("../lib/Employee");
describe("testing employee class construction", ()=>{
    it ("should add a name to the constructor",()=>{
        var name = "Sam";
        const obj = new Employee (name);
        expect (obj.name).toEqual(name);
    });
});