const Employee = require("../lib/Employee");

test("create an engineer object", () => {
  const engineer = new Employee("Charlton", 1, "charlton@instor.com");

  expect(engineer.name).toBe("Charlton");
  expect(engineer.id).toBe(1);
  expect(engineer.email).toBe("charlton@instor.com");
});
