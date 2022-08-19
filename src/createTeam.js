//Import classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

function createManagerHtml(manager) {
    return
    ${manager.getName(), manager.getId(), manager.getEmail(), manager.getOfficeNumber()};
}

function createEngineerHtml(engineer) {
    return
    ${engineer.getName(), engineer.getId(), engineer.getEmail(), engineer.getGithub()};
}

function createInternHtml(intern) {
    return
    ${intern.getName(), intern.getId(), intern.getEmail(), intern.getSchool()};
}

