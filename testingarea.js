const inquirer = require('inquirer');
const Manager = require("./lib/manager.js");

const questions = [
    {
                    type: "input",
                      name: "name",
                      message: "Please enter your team manager's name"
    },
    {
                      
                      type: "input",
                      name: "id",
                      message: "Please enter your team manager's id",
                      type: "input",
                      name: "email",
                      message: "Please enter your team manager's email"
    },
                     { type: "input",
                      name: "office",
                      message: "Please enter your team manager's office number"
    },
                      {type: "list",
                      name: "add",
                      message: "please select from the menu below",
                      choices: ["add engineer", "add intern", "finish building my team"]           
                    }    
    ];

    const teamArray = [];

    function getUserInput() {
      inquirer.prompt(questions).then(answers => {
         let {
             name,
             id,
             email,
             office,
             add
         } = answers;
         let mgr = new Manager(name, id, email, office);
         teamArray.push(mgr);
         if (add === "add engineer") {
             createEngineer();
         }
         if (add === "add intern") {
             createIntern();
         }
         if (add === "finish building my team") {
             generateTemplate();
             quit();
 
         }
 
     });
 }

 function generateTemplate () {
  console.log('this code works');
 }

 getUserInput ();