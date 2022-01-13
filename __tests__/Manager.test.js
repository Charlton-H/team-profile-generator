const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("create an manager object", () => {
  const manager = new Manager("name", "id", "email", "officeNumber");

  expect(manager.name).toBe("name");
  expect(manager.id).toBe("id");
  expect(manager.email).toBe("email");
  expect(manager.officeNumber).toBe("officeNumber");
});
