// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'githubName',
    default: 'Par92'
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    default: 'Peter92riggs@gmail.com'
  },
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    default: 'Professional README Generator'
  },
  {
    type: 'input',
    message: 'Give a brief description of your project',
    name: 'description',
    default: 'I am creating a command-line application that dynamically generates a professional README.md file from a users input using the Inquirer package',
  },
  {
      type: 'list',
      message: 'What license?',
      name: 'licensing',
      choices:[
          "Apache",
          "Boost",
          "GNU",
          "ISC",
          "MIT", 
          "Mozilla",
          "Unlicense",
      ]
    },
    {
      type: 'input',
      message: 'What command should be run to install dependencies?',
      name: 'comInstall',
      default: 'nmp i',
    },
    {
      type: 'input',
      message: 'What command should be used to run tests?',
      name: 'comTest',
      default: 'nmp test'
    },
    {
      type: 'input',
      message: 'What does the user need to know about using the repo?',
      name: 'repo',
      default: 'User should copy the link associated with this repository, and then type the command git clone with the copied link. Then the user should locate the index.js file and type "node js" in their terminal. After the user answers a series of prompts, the application will generate their new README file.'
    },
    {
      type: 'input',
      message: 'What does the user need to know about contributing to the repo?',
      name: 'contribute',
      default: 'email me at Peter92riggs@gmail.com'
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, (data), (err) =>
  err ? console.error(err) : console.log('Success!')
);

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
      console.log(data);
      console.log("step one complete, now creating ReadMe");
      return generateMarkdown(data);
    })
    .then((data) => {
      return writeToFile('README.md', data);
})
}

// Function call to initialize app
init();
