const inquirer = require('inquirer');
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
                message: "What is the manager's id?",

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
            addEmployees()
        })
    };
}