// TODO: Include packages needed for this application

const inquierer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {


        // Enter your project title, please.


        type: 'input',
        name: 'title',
        message: 'Enter your project title, please.',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Provide a title, please.')
            }
        }
    },


    // Enter the title of your Github repository, please.


    {
        type: 'input',
        name: 'repository',
        message: 'Enter the title of your Github repository, please.',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('Please enter the title of your Github repository.')
                return false;
            }
        }
    },


    // Enter your Github username, please.


    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username, please.',
        validate: hubInput => {
            if (hubInput) {
                return true;
            } else {
                console.log('Please enter your Github username!')
                return false;
            }
        }
    },


    // Enter a description of your work, please.


    {
        type: 'input',
        name: 'disc',
        message: 'Enter a description of your work, please.',
        validate: discInput => {
            if (discInput) {
                return true;
            } else {
                console.log('Please enter a description.')
                return false;
            }
        }
    },


    // Enter details on using your finished product, please.


    {
        type: 'input',
        name: 'use',
        message: 'Enter details on using your finished product, please.',
        validate: useInput => {
            if (useInput) {
                return true;
            } else {
                console.log('Please provide details on how to use your finished product.')
                return false;
            }
        }
    },


    // Enter your email for any further questions, please.


    {
        type: 'input',
        name: 'contact',
        message: 'Enter your email for any further questions, please.',
        validate: contactInput => {
            if (contactInput) {
                return true;
            } else {
                console.log('Please enter an email.')
                return false;
            }
        }
    },


    // Enter testing instructions for your application, please.


    {
        type: 'input',
        name: 'test',
        message: 'Enter testing instructions for your application, please.',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter test instructions for your application.')
                return false;
            }
        }
    },


    // Enter any packages needed for this application, please.


    {
        type: 'input',
        name: 'install',
        message: 'Enter any packages needed for this application, please.',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please Enter installation information.')
                return false;

            }
        }
    },


    // Enter guidelines for anyone wanting to contribute to your project, please.


    {
        type: 'input',
        name: 'contribution',
        message: 'Enter guidelines for anyone wanting to contribute to your project, please.',
        validate: contriInput => {
            if (contriInput) {
                return true;
            } else {
                console.log('Please enter any guidelines the user needs to know about.')
                return false;
            }
        }
    },


    // Enter licensing information, please.


    {
        type: 'list',
        name: 'license',
        message: 'Enter licensing information, please.',
        choices: ['GNU', 'MIT', 'Apache 2.0', 'ISC'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please select a license.')
                return false;
            }
        }
    },


    // Select the languages used for your application, please.


    {
        type: 'checkbox',
        name: 'built',
        message: 'Select the languages used for your application, please.',
        choices: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
        default: 0,
        validate: builtInput => {
            if (builtInput) {
                return true;
            } else {
                console.log('Please select at least one language.')
                return false;
            }
        }

    },


    // Enter a link to your deployed work, please.


    {
        type: 'input',
        name: 'link',
        message: 'Enter a link to your deployed work, please.',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('Please enter a link to your deployed application.');
                return false;
            }
        }
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, err => {
        if (err) {
            throw err
        };
        console.log('Your README file has been completed; you can locate it in the dist folder.')
    });
}
// TODO: Create a function to initialize app
function init() {
    return inquierer.prompt(questions);
};

// Function call to initialize app
init()
    .then(answers => generateMarkdown(answers))
    .then(generatedFile => writeToFile('ReadME.md', generatedFile))
    .catch(err => {
        console.log(err);
    })
