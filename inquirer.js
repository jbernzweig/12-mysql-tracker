// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const db = require('./db')

// TODO: Create an array of questions for user input
// From Inquirer Prompt Format
function mainMenu() {
    inquirer.prompt(
        {
            name: "choice",
            type: "list",
            message: "What would you like to view?",
            choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
        }    
    ) .then (response => {
        let choice = response.choice
        switch (choice) {
            case 'view all departments':
                // Execute Function to View all Depts.
            break;
            case 'view all roles'
        }
    })
}

// Function call to initialize app
init();
