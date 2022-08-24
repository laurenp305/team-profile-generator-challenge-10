// you're also going to import your classes, i.e., Manager, Engineer Intern
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

// do the same for engineer and intern

// in this file you're going to have a (some?) functions
function generateManagerHtml(manager) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/9f86b37536.js" crossorigin="anonymous"></script>
        <title>Team Profile Generator</title>
    </head>
    <body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile Generator</span>
        </nav>
    </header>
    

    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h4>Manager</h4><i class="material-icons"></i>
        </div>

        <div class="card-body">
            <p class="id">ID: ${manager.getId()}</p>
            <p class="email">Email: ${manager.getEmail()}</a></p>
            <p class="office">Office Number: ${manager.getOfficeNumber()}</p>
        </div>

    </div>
</div>
    `;
}

