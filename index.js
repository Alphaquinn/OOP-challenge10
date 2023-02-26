const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const outputDir = path.resolve(__dirname,"output");
const outputPath = path.join(outputDir,"Team.html");
const Manager = require("./lib/Manager");
const Engineer =require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/templateGenerate");


const EmployeeArray =[];
const profileQuestions = [
    {
        message: "What role is being assigned to the new team member?",
        type: "list",
        name: "role",
        choices: ["manager","intern","engineer"],

},
{
    tpye:"input",
    name:"name",
    message: "What is the new employees name?",

},
{
type:"input",
name:"email",
message: "what is the new NPC's email?",

},
{
    type:"input",
    name: "office_number",
    message: "what is your office's number?",
    when: (answer)=>answer.role === "manager",
},

{
    type:"input",
name: "intern_school",
message: "what school did you graduate from?",
when: (answer)=>answer.role === "intern",

},
{
    message:"are there any other members you would like to add now?",
    type:"list",
    name: "yes_no",
    choices:["yes","no"],
}
];




function questionStart(){
    inquirer.prompt
(profileQuestions).then((answer)=>{
    if(answer.role==="engineer"){
        const engineer = new Engineer (answer.name, answer.id, answer.email);
        EmployeeArray.push(engineer);
    }

    if (answer.role==="intern"){
        const intern = new Intern (
            answer.name,
            answer.id,
            answer.email,
            answer.intern_school
        );
        EmployeeArray.push(intern);
    }
    if (answer.role==="manager"){
        const manager = new Manager (answer.name, answer.id,answer.email,answer.office_number);
        EmployeeArray.push(manager);

    }



if (answer.yes_no==="yes"){
    questionStart();
}else{
    fs.writeFile(outputPath, generateHTML(EmployeeArray),(error)=>{if(error){
        return console.log(error);
    }
    return console.log("it works");

});
}
})
}

questionStart();

