//variables for different roles
const inquirer = require("inquirer");
const manager = require("./lib/manager");
const intern = require("./lib/intern");
const engineer = require("./lib/engineer");

const generateHTML = require("./src/generateHTML.js");
const fs = require("fs");
const path = require("path");
const Intern = require("./lib/intern");
const outputDir = path.resolve(__dirname, "output");
const outputPath = path.join(outputDir, "index.html");
const team = [];

const createManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name, please.",
            validate: employeeName => {
                if (employeeName === "") {
                    return "Please enter your name.";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter your ID, please.",
            validate: employeeId => {
                if (input === "") {
                    return "Please enter your ID.";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address, please.",
            validate: employeeEmail => {
                if (input === "") {
                    return "Please enter your email address.";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter your office number, please.",
            validate: employeeOfficeNumber => {
                if (input === "") {
                    return "Please enter your office number.";
                }
                return true;
            }
        }
    ]).then(answers => {
        const manager = new manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager);
        console.log(team);
        promptMenu();
    }).then(() => {
        createTeam();
    }).catch(err => {
        console.log(err);
    }
    );

    const promptMenu = () => {
        return inquirer.prompt([
            {
                type: "list",
                name: "menu",
                message: "Please select an option: ",
                choices: ["Add engineer", "Add intern", "Build my team"]  
            }
        ]).then(answers => {
            switch (answers.menu) {
                case "Add engineer":
                    createEngineer();
                    break;
                case "Add intern":
                    createIntern();
                    break;
                case "Build my team":
                    createTeam();
                    break;
            }
        });
    };

const createEngineer = () => {
    console.log('Add new engineer');
};

return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter the engineer's name, please.",
        validate: engineerName => {
            if (engineerName === "") {
                return "Please enter the engineer's name.";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "id",
        message: "Enter the engineer's ID, please.",
        validate: engineerId => {
            if (engineerId === "") {
                return "Please enter the engineer's ID.";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter the engineer's email address, please.",
        validate: engineerEmail => {
            if (engineerId === "") {
                return "Please enter the engineer's ID.";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "gitHub",
        message: "Enter the engineer's Github username, please.",
        validate: engineerGitHub => {
            if (engineerGitHub === "") {
                return "Please enter the engineer's Github username.";
            }
            return true;
        }
    }
]).then(answers => {
    console.log(answers);
    const Engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
    team.push(Engineer);
    promptMenu();
})
}; 

const createIntern = () => {
    console.log('Add new intern');


return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter the intern's name, please.",
        validate: internName => {
            if (internName === "") {
                return "Please enter the intern's name.";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "id",
        message: "Enter the intern's ID, please.",
        validate: internId => {
            if (internId === "") {
                return "Please enter the intern's ID.";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter the intern's email address, please.",
        validate: internEmail => {
            if (internName === "") {
                return "Please enter the intern's ID.";
            }
            return true;
            }
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school/university, please.",
            validate: internSchool => {
                if (internSchool === "") {
                    return "Please enter the intern's school/university.";
                }
                return true;
                }
            },
]).then(answers => {
    console.log(answers);
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    team.push(intern);
    promptMenu();
})
};

const createTeam = () => {
    console.log ('Team created!');

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir)
    }
    fs.writeFileSync(outputPath, generateSite(team), "utf-8");
}

promptManager();