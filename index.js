//variables for different roles
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const team = [];

//prompts questions for users to answer in terminal
function initApp() {
    inquirer.createPromptModule([{
        message: "What is the team member's name?",
        name: "Name",
    },
    {
        type: "list",
        message: "What is the team member's role?",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
        name: "Role"
    },
    { 
        message: "What is the team member's id?",
        name: "Id"
    },
    {
        message: "What is the team member's email?",
        name: "Email"
    }]).then(function(answers) {
        let roleType = "";
        if (role === "Engineer") {
            roleType = 'GitHub Username';
        } else if (role === "Intern") {
            roleType = 'School';
        } else { 
            roleType = "office number";
        }
        

// const createManager = () => {
//     return inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "Enter your name, please.",
//             validate: employeeName => {
//                 if (employeeName === "") {
//                     return "Please enter your name.";
//                 }
//                 return true;
//             }
//         },
//         {
//             type: "input",
//             name: "id",
//             message: "Enter your ID, please.",
//             validate: employeeId => {
//                 if (input === "") {
//                     return "Please enter your ID.";
//                 }
//                 return true;
//             }
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "Enter your email address, please.",
//             validate: employeeEmail => {
//                 if (input === "") {
//                     return "Please enter your email address.";
//                 }
//                 return true;
//             }
//         },
//         {
//             type: "input",
//             name: "officeNumber",
//             message: "Enter your office number, please.",
//             validate: employeeOfficeNumber => {
//                 if (input === "") {
//                     return "Please enter your office number.";
//                 }
//                 return true;
//             }
//         }
//     ]).then(answers => {
//         const manager = new manager(answers.name, answers.id, answers.email, answers.officeNumber);
//         team.push(manager);
//         promptMenu();
//     })
// }

//     const promptMenu = () => {
//         return inquirer.prompt([
//             {
//                 type: "list",
//                 name: "menu",
//                 message: "Please select an option: ",
//                 choices: ["Add engineer", "Add intern", "Build my team"]  
//             }
//         ]).then(userAnswer => {
//             switch (userAnswer.menu) {
//                 case "Add engineer":
//                     createEngineer();
//                     break;
//                 case "Add intern":
//                     createIntern();
//                     break;
//                 case "Build my team":
//                     createTeam();
//                     break;
//             }
//         });
//     };

// const createEngineer = () => {
//     console.log('Add new engineer');


// return inquirer.prompt([
//     {
//         type: "input",
//         name: "name",
//         message: "Enter the engineer's name, please.",
//         validate: engineerName => {
//             if (engineerName === "") {
//                 return "Please enter the engineer's name.";
//             }
//             return true;
//         }
//     },
//     {
//         type: "input",
//         name: "id",
//         message: "Enter the engineer's ID, please.",
//         validate: engineerId => {
//             if (engineerId === "") {
//                 return "Please enter the engineer's ID.";
//             }
//             return true;
//         }
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "Enter the engineer's email address, please.",
//         validate: engineerEmail => {
//             if (engineerId === "") {
//                 return "Please enter the engineer's ID.";
//             }
//             return true;
//         }
//     },
//     {
//         type: "input",
//         name: "gitHub",
//         message: "Enter the engineer's Github username, please.",
//         validate: engineerGitHub => {
//             if (engineerGitHub === "") {
//                 return "Please enter the engineer's Github username.";
//             }
//             return true;
//         }
//     }
// ]).then(answers => {
//     console.log(answers);
//     const Engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
//     team.push(Engineer);
//     promptMenu();
// })
// }
// const createIntern = () => {
//     console.log('Add new intern');


// return inquirer.prompt([
//     {
//         type: "input",
//         name: "name",
//         message: "Enter the intern's name, please.",
//         validate: internName => {
//             if (internName === "") {
//                 return "Please enter the intern's name.";
//             }
//             return true;
//         }
//     },
//     {
//         type: "input",
//         name: "id",
//         message: "Enter the intern's ID, please.",
//         validate: internId => {
//             if (internId === "") {
//                 return "Please enter the intern's ID.";
//             }
//             return true;
//         }
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "Enter the intern's email address, please.",
//         validate: internEmail => {
//             if (internName === "") {
//                 return "Please enter the intern's ID.";
//             }
//             return true;
//             }
//         },
//         {
//             type: "input",
//             name: "school",
//             message: "Enter the intern's school/university, please.",
//             validate: internSchool => {
//                 if (internSchool === "") {
//                     return "Please enter the intern's school/university.";
//                 }
//                 return true;
//                 }
//             },
//         ]).then(answers => {
//             console.log(answers);
//             const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
//             team.push(intern);
//             promptMenu();
//         })
//     };    

// const createTeam = () => {
//     console.log ('Team created!');

// // this creates the output directory if the path doesn't already exist
//     if (!fs.existsSync(outputDir)) {
//         fs.mkdirSync(outputDir)
//     }
//     fs.writeFileSync(outputPath, generateSite(team), "utf-8");
// }

// promptManager();