const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("create an manager object", () => {
  const manager = new Manager("Charlton", 1, "charlton@instor.com", 415);

  expect(manager.name).toBe("Charlton");
  expect(manager.id).toBe(1);
  expect(manager.email).toBe("charlton@instor.com");
  expect(manager.officeNumber).toBe(415);
});
