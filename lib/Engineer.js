const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    // Overriden to return 'Engineer'
    this.role = "Engineer";
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
