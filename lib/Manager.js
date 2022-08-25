//This imports Employee constructor 
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //this calls the employee constructor
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    // //returns office number when called
    // getOfficeNumber() {
    //     return this.officeNumber;
    // }
    //returns employee role when called
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;