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

const generateHTML = (teamObj) => {
  // function that will loop through obj
  // for each employee in obj
  // identify role and set condition
  // add html and css

  const html = [
    `<!DOCTYPE html>
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
  <link rel="stylesheet" href="./assets/css/styles.css" />
  </head>
  <body>
    <header class="hero">
      <h1 class="app-title">Employee Team List</h1>
    </header>

    <main>
      <div class="col-12">
        <div class="team-employees-container container">
          <div class="employee container">
          <div class="row">
          <!-- Team Cards -->
      `,
  ];

  for (const employee of teamObj) {
    switch (employee.role) {
      case "Manager":
        employeeMiscDetail = `<li class="list-group-item">Office Number: ${employee.officeNumber}</li>`;
        break;
      case "Engineer":
        employeeMiscDetail = `<li class="list-group-item">Github: <a href="https://github.com/${employee.github}">${employee.github}</a></li>`;
        break;
      case "Intern":
        employeeMiscDetail = `<li class="list-group-item">School: ${employee.school}</li>`;
        break;
    }

    html.push(`
    <div class="card  shadow-5 " style="width: 18rem;">
        <div class="card-header">
            <h3>${employee.name}</h3>
            <h4><i class="fa fa-mug-hot mr-2"></i>${employee.role}</h4>
        </div>
        <div class="card-body border border-primary">
            <div class="card" style="width: 15rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    ${employeeMiscDetail}
                </ul>
            </div>
        </div>
    </div>
`);
  }
  // Close body and html tags
  html.push(
    `
    </div>
    </div>
  </div>
</div>
</main>
</body>
</html>
    `
  );
  return html.join("");
};

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/employees.html", fileContent, (err) => {
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
    fs.mkdir("./dist/assets/css", { recursive: true }, (err) => {
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
    fs.copyFile(
      "./src/assets/css/styles.css",
      "./dist/assets/css/styles.css",
      (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: "Style sheet copied successfully!",
        });
      }
    );
  });
};

module.exports = {
  generateTeam,
  generateHTML,
  writeFile,
  createFolders,
  copyFile,
};
