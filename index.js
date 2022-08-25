//variables for different roles
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const team = [];

//prompts questions for users to answer in terminal
function initApp() {
    createHtml();
    addTeamMember();
}

function addTeamMember() {
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
        inquirer.createPromptModule([{
            message: "What is the team member's " + roleType + "?",
            name: "roleType"
        },
        {
            type: "list",
            message: "Would you like to add another team member?",
            choices: [
                "Yes",
                "No"
            ]
            name: "moreMembers"
        }])
        .then(function({roleType, moreMembers}) {
            let newTeamMember;
            if (role === "Engineer") {
                newTeamMember = new Engineer(name, id, email, roleType);
            } else if (role === "Intern") {
                newTeamMember = new Intern(name, id, email, roleType);
            } else { 
                newTeamMember = new Manager(name, id, email, roleType);
            }
            team.push(newTeamMember);
            createHtml(newTeamMember)
            .then(function() {
                if (moreMembers === "Yes") {
                    addTeamMember();
                } else {
                    completeHtml();
                }
            });
        });
    });
}

function createHtml(newTeamMember) {
    const html = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator | Lauren Pineiro</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
      <!--NAV BAR WITH TEAM PROFILE HEADER-->
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile Generator</span>
        </nav>
    </header>
    <!--TEAM CARDS-->
    <!-- <main> -->
        <div class="container">
            <div class="row justify-content-center" id="team-cards">`;

fs.writeFile("./output/team.html", html, function(err) {
    if (err) {
        return console.log(err);
    }
});
    console.log("Begin");
}

function addTeamMember(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGitHub();
            data = `
            <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h4>Engineer</h4><i class="material-icons"></i>
          </div>

          <div class="card-body">
              <p class="id">ID: ${id}</p>
              <p class="email">Email: ${email}</p>
              <p class="github">Github: ${gitHub}</p>
          </div>

      </div>
  </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `
            <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h4>Intern</h4><i class="material-icons"></i>
          </div>

          <div class="card-body">
              <p class="id">ID: ${id}</p>
              <p class="email">Email: ${email}</p>
              <p class="school">School: ${school}</p>
          </div>

      </div>
  </div>`;
        }
))
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