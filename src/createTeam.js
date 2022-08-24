//Import classes
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

function createManagerHtml(manager) {
    return `
    ${manager.getName(), manager.getId(), manager.getEmail(), manager.getOfficeNumber()};`
}

function createEngineerHtml(engineer) {
    return `
    ${engineer.getName(), engineer.getId(), engineer.getEmail(), engineer.getGithub()};`
}

function createInternHtml(intern) {
    return `
   ${intern.getName(), intern.getId(), intern.getEmail(), intern.getSchool()};`
}

module.exports = (userInput) => {
    const { managerName, managerId, managerEmail, managerOfficeNumber
    } = userInput;
    const createdManager = new Manager( managerName, managerId, managerEmail, managerOfficeNumber
    );

    const { engineerName, engineerId, engineerEmail, engineerGitHub } =
    userInput;
    const createdEngineer = new Engineer( engineerName, engineerId, engineerEmail, engineerGitHub
    );

    const {internName, internID, internEmail, internSchool 
    } =  userInput;
    const createdIntern = new Intern( internName, internID, internEmail, internSchool
    );
    
return `
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
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile Generator</span>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
  <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h4>Manager ${managerName}</h4><i class="material-icons"></i>
          </div>

          <div class="card-body">
              <p class="id">ID: ${managerId}</p>
              <p class="email">Email: ${managerEmail}</p>
              <p class="office">Office Number: ${managerOfficeNumber}</p>
          </div>

      </div>
  </div>
  
  <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h4>Intern ${internName}</h4><i class="material-icons"></i>
          </div>

          <div class="card-body">
              <p class="id">ID: ${internID}</p>
              <p class="email">Email: ${internEmail}</p>
              <p class="school">School: ${internSchool}</p>
          </div>
  </div>
</div>
  
  <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h4>Engineer ${engineerName}</h4><i class="material-icons"></i>
          </div>

          <div class="card-body">
              <p class="id">ID: ${engineerId}</p>
              <p class="email">Email: ${engineerEmail}</p>
              <p class="github">Github: ${engineerGitHub}</p>
          </div>

      </div>
  </div>

  
            </div>
        </div>
    </main>
    </body>
    </html>
    `;
}