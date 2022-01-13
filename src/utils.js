const fs = require("fs");
const manager = require("../lib/Manager");
const engineer = require("../lib/engineer");
const intern = require("../lib/Intern");

const generateTeam = (employeesData) => {
  return new Promise((resolve, reject) => {
    let teamObj = employeesData.map((employee) => {
      switch (employee.role) {
        case "manager":
          return new Manager(
            member.name,
            member.id,
            member.email,
            member.officeNumber
          );
        case "engineer":
          return new Engineer(
            member.name,
            member.id,
            member.email,
            member.github
          );
        case "intern":
          return new Intern(
            member.name,
            member.id,
            member.email,
            member.school
          );
      }
    });
    resolve({
      ok: true,
      message: "Team objects created successfully!",
      data: teamObj,
    });
  });
};

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

module.exports = { generateHTML, writeFile, createFolders, copyFile };
