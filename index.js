// Controls command line interaction
const fs = require('fs')
const inquirer = require("inquirer")

const generateHTML = require("./src/template")
const generateCard = require("./src/card")

const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

// Holds all created employees
const employees = []

function init(){
    return inquirer.prompt([{
        name: "employee",
        type: "list",
        message: "What employee are you creating?",
        choices: ["Engineer", "Intern", "Manager"]
    }]).then(res => {
        switch(res.employee){
            case "Engineer":
                createEngineer()
                break;
            case "Intern":
                createIntern()
                break;
            case "Manager":
                createManager()
                break;
        }
    })
}

function createEngineer(){
    inquirer.prompt ([
        {
            name: "name", 
            type: "input", 
            message: "Engineer Name",
        }, 
        {
            name: "id", 
            type: "number", 
            message: "Engineer ID?", 
        }, 
        {
            name: "email", 
            type: "input", 
            message: "Engineer Email", 
        }, 
        {
            name: "github", 
            type: "input", 
            message: "Engineer Github Username", 
        },
        {
            name: "more", 
            type: "confirm", 
            message: "Create more Employees?",
        }
    ]).then( res => {
        const engineer = new Engineer(res.name, res.id, res.email, res.github)
        employees.push(generateCard(engineer))
        if(res.more){
            init()
        } else {
            createRoster(employees)
        }
    })
}

function createIntern(){
    inquirer.prompt ([
        {
            name: "name", 
            type: "input", 
            message: "Intern Name",
        }, 
        {
            name: "id", 
            type: "number", 
            message: "Intern ID?", 
        }, 
        {
            name: "email", 
            type: "input", 
            message: "Intern Email", 
        }, 
        {
            name: "school", 
            type: "input", 
            message: "Intern School", 
        },
        {
            name: "more", 
            type: "confirm", 
            message: "Create more Employees?",
        }
    ]).then( res => {
        const intern = new Intern(res.name, res.id, res.email, res.school)
        employees.push(generateCard(intern))
        if(res.more){
            init()
        } else {
            createRoster(employees)
        }
    })
}

function createManager(){
    inquirer.prompt ([
        {
            name: "name", 
            type: "input", 
            message: "Manager Name",
        }, 
        {
            name: "id", 
            type: "number", 
            message: "Manager ID?", 
        }, 
        {
            name: "email", 
            type: "input", 
            message: "Manager Email", 
        }, 
        {
            name: "phone", 
            type: "input", 
            message: "Manager Office Number", 
        },
        {
            name: "more", 
            type: "confirm", 
            message: "Create more Employees?",
        }
    ]).then( res => {
        const manager = new Manager(res.name, res.id, res.email, res.phone)
        employees.push(generateCard(manager))
        if(res.more){
            init()
        } else {
            createRoster(employees)
        }
    })
}

function createRoster(employees){
    const markdown =  generateHTML(employees)
    fs.writeFile("dist/index.html", markdown, function (err) {
    if (err) throw err;
        console.log("Employee roster has been generated!")
    })
}

init()