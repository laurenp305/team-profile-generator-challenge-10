//This imports Employee constructor 
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //this calls the employee constructor
        super(name, id, email);

        officeNumber = this.officeNumber;
    }
    //this overrides the employee's role to display manager
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;