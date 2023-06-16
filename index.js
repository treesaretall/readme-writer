// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { title } = require('process');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is title of your project?',
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How would someone install your project?',
    },
    {
        type: 'input',
        name: 'use',
        message: 'How does someone use your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use for your project?',
        choices: ['MIT', 'IDK', 'FML']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Who contributed to your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How would someone test your project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
];

inquirer.prompt(questions)
.then((data) => {
    const fileName = "created-readme.md";
    const fileContent = `## My ReadMe!`

    fs.writeFile(fileName, fileContent, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

