const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, name, officeNumber);
    this.officeNumber = officeNumber;
    // Overriden to return 'Manager'
    this.role = "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
