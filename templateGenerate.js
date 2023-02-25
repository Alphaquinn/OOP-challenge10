const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

generateHTML = (employeeInfo)=>{
    pageArray=[];
    for(let i =0; i<employeeInfo.length; i++){
        const employee = employeeInfo[i];
        const role = employee.getRole();


        if(role ==="Manager"){
            const managerTab = generateM(employee);
            pageArray.push(managerTab);
        }
        if(role==="Intern"){
            const internTab = generateI(employee);
            pageArray.push(internTab);
        }
        if(role==="Engineer"){
            const enginerTab = generateE(employee);
            pageArray.push(enginerTab);
    }
}
const employeeTabs = pageArray.join("");
const generateCompany = generateCompanyPage(employeeTabs);
return generateCompany;


}
const generateM= function(manager){
    return `
    <div class=col-4 mt-4>
    <div class="card h-100">
    <div class="card-header">
    <h3> ${manager.name}</h3>
    <h4>Manager</h4><i class = "material-icons">content-paste</i>
    </div>
    <div class= "card-body">
    <p class = id>id:${manager.id}</p>
    <p class="email> Email: a> href=mail:${manager.email}">${manager.email}
    <p class= "office"> Office Number: ${manager.officeNumber}</p>
    </div>
    </div>
    </div>
    `;


};



const generateI= function(manager){
    return `
    <div class=col-4 mt-4>
    <div class="card h-100">
    <div class="card-header">
    <h3> ${intern.name}</h3>
    <h4>Manager</h4><i class = "material-icons">content-paste</i>
    </div>
    <div class= "card-body">
    <p class = id>id:${manager.id}</p>
    <p class="email> Email: a> href=mail:${intern.email}">${intern.email}
    <p class= "office"> Office Number: ${manager.officeNumber}</p>
    </div>
    </div>
    </div>
    `;


};
const generateE= function(engineer){
    return `
    <div class=col-4 mt-4>
    <div class="card h-100">
    <div class="card-header">
    <h3> ${engineer.name}</h3>
    <h4>Manager</h4><i class = "material-icons">content-paste</i>
    </div>
    <div class= "card-body">
    <p class = id>id:${engineer.id}</p>
    <p class="email> Email: a> href=mail:${engineer.email}">${engineer.email}
    <p class= "office"> Office Number: ${engineer.officeNumber}</p>
    </div>
    </div>
    </div>
    `;


};

const generateCompanyPage = function(employeeTabs){
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta> charset="UTF-8">
    <meta name= "viewport" vontents="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel "stylesheet" href= https://cdnjs.cloudflare.com/ajax/libs/fontawsome/5.11.2/css/all.min.css">
    <link href "https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel "stylesheet" href= https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity= sha384-9aIt2nRpC12Uk9gS9baD1411NQApFmC26EwAOH8WgZ15MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link href = https://fonts.googleapis.com/icon?family=Material+Icons" rel= "stylesheet">
    <link rel= "stylesheet" href="style.css">
    </head>
    <body>
    <header>
    <nav class "navbar" id="navbar">
    <span class = "navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
    </nav>
    </header>
    <main>
    <div class ="container">
    <div class= "row justify-content-center" id= 
    `
    `
}

