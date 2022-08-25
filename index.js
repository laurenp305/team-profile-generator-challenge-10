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
        name: "name",
    },
    {
        type: "list",
        message: "What is the team member's role?",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
        name: "role"
    },
    { 
        message: "What is the team member's id?",
        name: "id"
    },
    {
        message: "What is the team member's email?",
        name: "email"
    }]).then(function({name, role, id, email}) {
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
            ],
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

function newTeamMember(member) {
    return new Promise(function(resolve, reject) {
        const role = member.getRole();
        const name = member.getName();
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
        } else {
            const officeNumber = member.getOfficeNumber();
            data = `
            <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h4>Manager</h4><i class="material-icons"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${id}</p>
                <p class="email">Email: ${email}</p>
                <p class="office">Office Number: ${officeNumber}</p>
            </div>
  
        </div>
    </div>`;
    }
    console.log("Adding new team member");
    fs.appendFile("./output/team.html", data, function(err) {
        if (err) {
            return console.log(err);
        };
        return resolve();
        });
    });

}
function completeHtml() {
    const html = `
        </div>
        </div>
</body>
</html>`;
    fs.appendFile("./output/team.html", html, function(err) {
        if (err) {
            return console.log(err);
    };
});
console.log(err);
}

initApp();
