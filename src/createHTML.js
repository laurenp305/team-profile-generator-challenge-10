//creates Manager section/card 
const createManager = (manager) => {
    return `<div class="card">
    <div class="card-header">
        <h2>${manager.name}</h2>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: ${manager.email}</li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
</div>`
}

//creates Engineer section/card
const createEngineer = (engineer) => {
    return `<div class="card">
    <div class="card-header">
        <h2>${engineer.name}</h2>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: ${engineer.email}</li>
            <li class="list-group-item">Github: ${engineer.gitHub}</li>
        </ul>
    </div>
</div>`
}

//creates Intern section/card
const createIntern = (intern) => {
    return `<div class="card">
    <div class="card-header">
        <h2>${intern.name}</h2>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: ${intern.email}</li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
</div>`
}

//this pushes the team member array to the page 
createHTML = (data) => {
    cardsArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        //this calls the manager 
        if (role === "Manager") {
            cardsArray.push(createManager(employee));
        }
        //this calls the engineer
        else if (role === "Engineer") {
            cardsArray.push(createEngineer(employee));
        }
        //this calls the intern
        else if (role === "Intern") {
            cardsArray.push(createIntern(employee));
        }
    }

//combines strings 
const teamCards = cardsArray.join("");

//returns string to generated page 
const generateTeam = createTeamPage(teamCards);
return generateTeam;

}

//creates overall HTML page 
const createTeamPage = (teamCards) => {
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
      <!--NAV BAR WITH TEAM PROFILE HEADER-->
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile Generator</span>
        </nav>
    </header>
    <!--TEAM CARDS-->
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
                ${teamCards}

      </div>
  </div>

  
            </div>
        </div>
    
</body>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  </body>
</html>`
;
}

module.exports = createHTML;
