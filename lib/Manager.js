// Extends Employee class to create new Manager class

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email),
        this.officeNumber = officeNumber
    }

    getOfficeNumber(){
        return this.officeNumber
    }

    getRole(){
        return "Manager"
    }
}

module.exports = Manager