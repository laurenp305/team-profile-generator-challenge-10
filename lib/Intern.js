//This imports Employee constructor 
const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        //calls employee constructor
        super(name, id, email);

        this.school = school;
    }
    //displays school name
    getSchool() {
        return "2University";
    }
    //overrides the employee's role to display intern
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
