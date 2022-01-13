class Employee {
  constructor(name = "") {
    this.name = name;
    (this.id = id), (this.email = email), (this.role = "employee");
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  // Returns 'Employee'
  getRole() {
    return this.role;
  }
}

module.exports = Employee;
