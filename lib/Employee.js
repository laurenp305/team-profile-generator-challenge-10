//this is the employee constructor
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //returns name based on user input
    getName() {
        return this.name;
    }
    //returns id based on user input
    getId() {
        return this.id;
    }
    //returns email based on user input
    getEmail() {
        return this.email;
    }
    //returns role based on user input
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;
