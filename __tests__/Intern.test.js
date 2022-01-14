const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("create an intern object", () => {
  const intern = new Intern("Charlton", 1, "charlton@instor.com", "CSUEB");

  expect(intern.name).toBe("Charlton");
  expect(intern.id).toBe(1);
  expect(intern.email).toBe("charlton@instor.com");
  expect(intern.school).toBe("CSUEB");
});
