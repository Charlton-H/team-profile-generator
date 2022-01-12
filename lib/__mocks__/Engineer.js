const Employee = require("./Employee");

class Engineer extends Character {
  constructor(name = "") {
    super(name);

    // this.github = ""
  }

  getGithub() {}

  // Overriden to return 'Engineer'
  getRole() {}
}
