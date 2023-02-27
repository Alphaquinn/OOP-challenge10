

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
const generateManager= function(manager){
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



const generateIntern= function(manager){
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
const generateEmployee= function(engineer){
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
    <div class= "row justify-content-center" id= "EmployeeCards"
    ${employeeTabs}
    </div>
    </div>
    </div>
    </main> 
    `
    
};


module.exports = generateHTML

