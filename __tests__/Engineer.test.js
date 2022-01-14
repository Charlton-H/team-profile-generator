const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("create an engineer object", () => {
  const engineer = new Engineer(
    "Charlton",
    1,
    "charlton@instor.com",
    "charlton-h"
  );

  expect(engineer.name).toBe("Charlton");
  expect(engineer.id).toBe(1);
  expect(engineer.email).toBe("charlton@instor.com");
  expect(engineer.github).toBe("charlton-h");
});
