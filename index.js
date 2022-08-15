const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require("./lib/manager");
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern')
const renderTeam = require('./src/html-template');

const teamMemberArr = []; 

const init = () => {

    const createManager = () => {
        inquirer
        .prompt (
            [{
                type: 'input',
                name: 'id',
                message: "What is the manager's ID?",

            },
            {
                type: 'input',
                name: 'name',
                message: "What is the manager's name?",

            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email?"
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's Office Number?",

            },
            ]
        )
        .then(answers => {
            const manager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber,
            );
            teamMemberArr.push(manager)
            addEmployees();
        })
    };

function createEngineer (){
        inquirer
        .prompt (
            [{
                type: 'input',
                name: 'id',
                message: "What is the engineer's ID?",

            },
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",

            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email?"
            },

            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's Github?",

            },
            ]
        )
        .then(answers => {
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github,
            );
            teamMemberArr.push(engineer)
            addEmployees();
        })

    }
    function createIntern (){
        inquirer
        .prompt (
            [{
                type: 'input',
                name: 'id',
                message: "What is the interns's ID?",

            },
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?",

            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school name?",

            },
            ]
        )
        .then(answers => {
            const intern = new Intern(
                answers.name,
                answers.id, 
                answers.email,
                answers.school,
            );
            teamMemberArr.push(intern)
            addEmployees();
        })

    }
function buildTeam (){
    const html = ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>   
    <header class="mx-auto p-2">
    <h1 class="text-center border-bottom p-2 text-light bg-primary">Team Directory</h1>
  </header>
    <div class="d-flex justify-content-center align-items-center  w-100" style="height: 100vh;">
    ${renderTeam(teamMemberArr)}
    </div>
    </body>
    </html>   
    `
    fs.writeFile('./dist/index.html', html, (err) =>
     err ? console.error(err) : console.log("Generating Team Directory...."));
 }
}


init();