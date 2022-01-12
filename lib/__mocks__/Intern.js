const Employee = require("./Employee");

class Intern extends Character {
  constructor(name = "") {
    super(name);

    // this.school = ""
  }

  getSchool() {}

  // Overriden to return 'Intern'
  getRole() {}
}
