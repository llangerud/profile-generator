const inquirer = require('inquirer');
const fs = require('fs');
const generateIndex = require("./src/generateIndex");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require ("./lib/intern");

const questions = [
    {
        type: "input",
        name: "name",
        message: "Please enter your team manager's name"
    },
    {

        type: "input",
        name: "id",
        message: "Please enter your team manager's id"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your team manager's email"
    },
    {
        type: "input",
        name: "office",
        message: "Please enter your team manager's office number"
    }, {
        type: "list",
        name: "add",
        message: "please select from the menu below",
        choices: ["add engineer", "add intern", "finish building my team"]
    }
];
const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter your engineer's name"
    },
    {
        type: "input",
        name: "id",
        message: "Please enter your engineer's id"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your engineer's email"
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your engineer's github"
    }, {
        type: "list",
        name: "add",
        message: "please select from the menu below",
        choices: ["add engineer", "add intern", "finish building my team"]
    }

];
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter your intern's name"
    },
    {

        type: "input",
        name: "id",
        message: "Please enter your intern's id"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your intern's email"
    },
    {
        type: "input",
        name: "school",
        message: "Please enter your intern's school"
    }, {
        type: "list",
        name: "add",
        message: "please select from the menu below",
        choices: ["add engineer", "add intern", "finish building my team"]
    },
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
            console.log('done');
            generateIndex(teamArray);

        }

    });
}

function createEngineer() {
    return inquirer.prompt(engineerQuestions).then(answers => {
        let {
            name,
            id,
            email,
            github,
            add
        } = answers;
        let egr = new Engineer(name, id, email, github, add);
        teamArray.push(egr);
        if (add === "add engineer") {
            createEngineer();
        }
        if (add === "add intern") {
            createIntern();
        }
        if (add === "finish building my team") {
            generateIndex(teamArray);
        }

    });

}
function createIntern() {
    return inquirer.prompt(internQuestions).then(answers => {
        let {
            name,
            id,
            email,
            school,
            add
        } = answers;
        let itr = new Intern(name, id, email, school, add);
        teamArray.push(itr);
        if (add === "add engineer") {
            createEngineer();
        }
        if (add === "add intern") {
            createIntern();
        }
        if (add === "finish building my team") {
          generateIndex(teamArray);
        }


    });
}

function init() {

    getUserInput();
}

init();
