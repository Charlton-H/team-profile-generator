const fs = require("fs");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/Intern");

const generateTeam = (employeesData) => {
  // return new Promise((resolve, reject) => {
  let teamObj = employeesData.map((employee) => {
    switch (employee.role) {
      case "Manager":
        return new Manager(
          employee.name,
          employee.id,
          employee.email,
          employee.officeNumber
        );
      case "Engineer":
        return new Engineer(
          employee.name,
          employee.id,
          employee.email,
          employee.github
        );
      case "Intern":
        return new Intern(
          employee.name,
          employee.id,
          employee.email,
          employee.school
        );
    }
  });
  return teamObj;
  // resolve({
  //   ok: true,
  //   message: "Team objects created successfully!",
  //   data: teamObj,
  // });
  // });
};

// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

const generateHTML = () => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
  />
  <link rel="stylesheet" href="./Assets/css/styles.css" />
  </head>
  <body>
    <header class="hero">
      <h1 class="app-title">Weather Dashboard</h1>
    </header>

    <main>
      <div class="col-12 col-md-9">
        <div class="forecast-container">
          <h2 class="subtitle">
            <span id="city-forecast"></span>
          </h2>
          <div class="forecast"></div>
        </div>
      </div>
    </main>
  </body>
</html>
`;
};

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", fileContent, (err) => {
      // if there's an error, reject the Promise and send the error to the Promise's '.catch()' method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successfuldata to the '.then()' method
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

const createFolders = () => {
  return new Promise((resolve, reject) => {
    fs.mkdir("./dist/assets/images", { recursive: true }, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "Folders created successfully!",
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "Style sheet copied successfully!",
      });
    });
  });
};

module.exports = {
  generateTeam,
  // generateHTML,
  // writeFile,
  // createFolders,
  // copyFile,
};
