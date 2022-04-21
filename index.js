// TODO: Include packages needed for this application
import { prompt } from 'inquirer.js';
import { writeFile } from 'fs';
import generateMarkdown from './utils/generateMarkdown';
const fileName = "README.md";
import util from 'util';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "How do you describe your project?",
        name: "description"
    },
    {
        type: "input",
        message: "How do you install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Please provide the usage information, if there is one?",
        name: "usage"
    },
    {
        type: "input",
        message: "Emter contribution information:",
        name: "contributing"
    },
    {
        type: "input",
        message: "Is there any test you running for your project?",
        name: "tests"
    },
    {
        type: "input",
        message: "Please enter the license you want to use?",
        name: "licenses"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 const markdown = generateMarkdown(data);

 writeFile(fileName, markdown, function (err){
     if (err) throw err;
     else console.log('success, creating readme');

 })

}

// TODO: Create a function to initialize app
function init() {
    prompt([questions])
    .then(function(data)  {
        writeToFile(fileName,data)
    })
    
};

// Function call to initialize app
init();
