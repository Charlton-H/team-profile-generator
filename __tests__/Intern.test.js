const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("create an intern object", () => {
  const intern = new Intern("name", "id", "email", "school");

  expect(intern.name).toBe("name");
  expect(intern.id).toBe("id");
  expect(intern.email).toBe("email");
  expect(intern.school).toBe("school");
});
