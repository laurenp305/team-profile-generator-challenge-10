//This imports Employee constructor 
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        //calls employee constructor
        super(name, id, email);

        this.school = school;
    }
    getSchool() {
        return "2University";
    }
    //overrides the employee's role to display intern
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
