const inquirer = require("inquirer");
const generateHTML = 1; // require("...JS file for HTML template")
const { writeFile, createFolders } = 1; // require("...JS file, write HTML File and copy CSS file")

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

const promptEmployee = () => {
  return inquirer.prompt([
    {
      type: "checkbox",
      name: "profileType",
      message: "What profile type would you like to create?",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]);
};

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
const promptManager = (profileData) => {
  console.log(`
  ===============
  Add a New Manager
  ===============
  `);

  // if there's no 'manager' array property, create one
  if (!portfolioData.managers) {
    portfolioData.managers = [];
  }

  return inquirer
    .prompt([
      // Manager Name
      {
        type: "input",
        name: "managerName",
        message: "What is the name of the manager you would like to create?",
        validate: (managerNameInput) => {
          if (managerNameInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      // Manager ID
      {
        type: "input",
        name: "managerId",
        message: "What is the ID# of the manager you would like to create?",
        validate: (managerIdInput) => {
          if (managerIdInput) {
            return true;
          } else {
            console.log("Please enter an ID#!");
            return false;
          }
        },
      },
      // Manager Email
      {
        type: "input",
        name: "managerEmail",
        message: "What is the email of the manager you would like to create?",
        validate: (managerEmailInput) => {
          if (managerEmailInput) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      // Manager Github Username
      {
        type: "input",
        name: "managerGithub",
        message: "What is the  manager's Github username?",
        validate: (managerGithubInput) => {
          if (managerGithubInput) {
            return true;
          } else {
            console.log("Please enter the manager's Github username!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to enter another project?",
        default: false,
      },
    ])
    .then((profileData) => {
      portfolioData.manager.push(profileData);
      if (profileData.confirmAddEmployee) {
        return promptEmployee();
      } else {
        console.log(profileData);
        return profileData;
      }
    });
};

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
const promptEngineer = (profileData) => {
  console.log(`
  ===============
  Add a New Engineer
  ===============
  `);

  // if there's no 'engineer' array property, create one
  if (!portfolioData.engineers) {
    portfolioData.engineers = [];
  }

  return inquirer
    .prompt([
      // Engineer Name
      {
        type: "input",
        name: "engineerName",
        message: "What is the name of the engineer you would like to create?",
        validate: (engineerNameInput) => {
          if (engineerNameInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      // Engineer ID
      {
        type: "input",
        name: "engineerId",
        message: "What is the ID# of the engineer you would like to create?",
        validate: (engineerIdInput) => {
          if (engineerIdInput) {
            return true;
          } else {
            console.log("Please enter an ID#!");
            return false;
          }
        },
      },
      // Engineer Email
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the email of the engineer you would like to create?",
        validate: (engineerEmailInput) => {
          if (engineerEmailInput) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      // Engineer Github Username
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the  engineer's Github username?",
        validate: (engineerGithubInput) => {
          if (engineerGithubInput) {
            return true;
          } else {
            console.log("Please enter the engineer's Github username!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to enter another project?",
        default: false,
      },
    ])
    .then((profileData) => {
      portfolioData.engineer.push(profileData);
      if (profileData.confirmAddEmployee) {
        return promptEmployee();
      } else {
        console.log(profileData);
        return profileData;
      }
    });
};

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
const promptIntern = (profileData) => {
  console.log(`
  ===============
  Add a New Intern
  ===============
  `);

  // if there's no 'intern' array property, create one
  if (!portfolioData.interns) {
    portfolioData.interns = [];
  }

  return inquirer
    .prompt([
      // Manager Name
      {
        type: "input",
        name: "internName",
        message: "What is the name of the intern you would like to create?",
        validate: (internNameInput) => {
          if (internNameInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
      // Manager ID
      {
        type: "input",
        name: "internId",
        message: "What is the ID# of the intern you would like to create?",
        validate: (internIdInput) => {
          if (internIdInput) {
            return true;
          } else {
            console.log("Please enter an ID#!");
            return false;
          }
        },
      },
      // Manager Email
      {
        type: "input",
        name: "internEmail",
        message: "What is the email of the intern you would like to create?",
        validate: (internEmailInput) => {
          if (internEmailInput) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      // Manager Github Username
      {
        type: "input",
        name: "internGithub",
        message: "What is the  intern's Github username?",
        validate: (internGithubInput) => {
          if (internGithubInput) {
            return true;
          } else {
            console.log("Please enter the intern's Github username!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to enter another project?",
        default: false,
      },
    ])
    .then((profileData) => {
      portfolioData.intern.push(profileData);
      if (profileData.confirmAddEmployee) {
        return promptEmployee();
      } else {
        console.log(profileData);
        return profileData;
      }
    });
};

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// ------------------------------------------------------------------------------

// GIVEN a command-line application that accepts user input

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
