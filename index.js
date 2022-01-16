const inquirer = require("inquirer");
const {
  generateTeam,
  generateHTML,
  writeFile,
  // createFolders,
  // copyFile,
} = require("./src/utils");

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
let employeesData = [];

const promptEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "profileType",
        message: "What profile type would you like to create?",
        choices: ["Manager", "Engineer", "Intern", "None"],
      },
    ])
    .then((data) => {
      switch (data.profileType) {
        case "Manager":
          return promptManager();
        case "Engineer":
          return promptEngineer();
        case "Intern":
          return promptIntern();
        case "None":
          return Promise.resolve();
      }
    });
};

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
const promptManager = () => {
  console.log(`
  ===============
  Add a New Manager
  ===============
  `);

  // if there's no 'manager' array property, create one
  // if (!employeesData.managers) {
  //   employeesData.managers = [];
  // }

  return inquirer
    .prompt([
      // Manager Name
      {
        name: "name",
        type: "input",
        message: "What is the name of the manager you would like to create?",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      // Manager Employee ID
      {
        name: "id",
        type: "input",
        message: "What is the ID# of the manager you would like to create?",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Please enter an ID#!");
            return false;
          }
        },
      },
      // Manager Email
      {
        name: "email",
        type: "input",
        message: "What is the email of the manager you would like to create?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      // Manager Office Number
      {
        name: "officeNumber",
        type: "input",
        message: "What is the  manager's office number?",
        validate(number) {
          const pass = number.match(
            /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
          );
          if (pass) {
            return true;
          }

          return "Please enter a valid phone number E.G. xxx.xxx.xxxx";
        },
      },
    ])
    .then((data) => {
      data.role = "Manager";
      // employeesData.managers.push(data);
      employeesData.push(data);
      return promptEmployee();
    });
};

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
const promptEngineer = () => {
  console.log(`
  ===============
  Add a New Engineer
  ===============
  `);

  // if there's no 'engineer' array property, create one
  // if (!employeesData.engineers) {
  //   employeesData.engineers = [];
  // }

  return inquirer
    .prompt([
      // Engineer Name
      {
        name: "name",
        type: "input",
        message: "What is the name of the engineer you would like to create?",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      // Engineer ID
      {
        name: "id",
        type: "input",
        message: "What is the ID# of the engineer you would like to create?",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Please enter an ID#!");
            return false;
          }
        },
      },
      // Engineer Email
      {
        name: "email",
        type: "input",
        message: "What is the email of the engineer you would like to create?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      // Engineer Github Username
      {
        name: "github",
        type: "input",
        message: "What is the  engineer's Github username?",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            console.log("Please enter the engineer's Github username!");
            return false;
          }
        },
      },
    ])
    .then((data) => {
      data.role = "Engineer";
      // employeesData.engineers.push(data);
      employeesData.push(data);
      return promptEmployee();
    });
};

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
const promptIntern = () => {
  console.log(`
  ===============
  Add a New Intern
  ===============
  `);

  // if there's no 'intern' array property, create one
  // if (!employeesData.interns) {
  //   employeesData.interns = [];
  // }

  return inquirer
    .prompt([
      // Intern Name
      {
        name: "name",
        type: "input",
        message: "What is the name of the intern you would like to create?",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      // Intern ID
      {
        name: "id",
        type: "input",
        message: "What is the ID# of the intern you would like to create?",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Please enter an ID#!");
            return false;
          }
        },
      },
      // Intern Email
      {
        name: "email",
        type: "input",
        message: "What is the email of the intern you would like to create?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      // Intern School
      {
        name: "school",
        type: "input",
        message: "What is the intern's school?",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("Please enter the intern's Github username!");
            return false;
          }
        },
      },
    ])
    .then((data) => {
      data.role = "Intern";
      // employeesData.interns.push(data);
      employeesData.push(data);
      return promptEmployee();
    });
};

promptEmployee().then(() => {
  // console.log(employeesData);
  // generateTeam(employeesData);
  var teamObj = generateTeam(employeesData);
  // console.log(teamObj);
  var html = generateHTML(teamObj);
  console.log(html);
  writeFile(html);
});
// .then((response) => {
//   console.log(response.data);
// });
