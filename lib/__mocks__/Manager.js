const Employee = require("./Employee");

class Manager extends Character {
  constructor(name = "") {
    super(name);

    // this.officeNumber = ""
  }

  // Overriden to return 'Manager'
  getRole() {}
}
