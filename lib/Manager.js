const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name,email,id,officeNumber){
        super(name,email,id);
        this.OfficeNumber=OfficeNumber;
    }

    getOfficeNumber(){
        return this.OfficeNumber;
    }
    getRole(){
        return "Manager";
    }
}



module.exports=Manager;