// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// From Inquirer Prompt Format
const questions = [
    {
        name: "first_question",
        type: "list",
        message: "What would you like to view?",
        choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
    },

];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("Here we go...");
        // writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
}

// Function call to initialize app
init();
