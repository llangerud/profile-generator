const Manager = require("../lib/manager.js");
const Engineer = require("../lib/engineer.js");
const Intern = require ("../lib/intern");
const index = require('../index');



function generateIndex (data) {
        
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>profile-generator</title>
    <link rel="stylesheet" href= "./style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <div class="jumbotron bg-info">
        <h1 class="display-4 text-center text-white">My Team</h1>
    </div>
      <div class = "row mx-auto d-flex justify-content-around">
${data.map(function (data) {
    function uniqueAttribute () {
     if (data.getRole() === "Engineer") {
     data.officeNumber = `Github: <a href = https://github.com/${data.getGithub()}>${data.getGithub()}</a>`
     }
     if (data.getRole() === "Intern") {
        data.officeNumber = `School: ${data.getSchool()}`
        }
        if (data.getRole() === "Manager") {
            data.officeNumber = `Office number: ${data.officeNumber}` 
        }
    }
    uniqueAttribute(data)
        return `
          <div class="column">
          <div class="card border-info m-4">
          <div class = "card header text-center bg-info text-white">
          <br><br>
             <h3>${data.name}</h3>
           <br><br>
            </div>
            <div class="card-body">
            <ul class="list-group list-group-flush">
            <li class="list-group-item shadow p-3 mb-5 bg-white rounded text-center">
            <h5>${data.getRole()}</h5>
            <img src="${data.getRole()}.png" class= "w-25 p-3" alt="${data.getRole()} icon"></img> 
            </li>
            <li class="list-group-item shadow p-3 mb-5 bg-white rounded">ID: ${data.id}</li>
            <li class="list-group-item shadow p-3 mb-5 bg-white rounded"> Email: <a href = mailto: ${data.email}>${data.email}</a></li>
            <li class ="list-group-item shadow p-3 mb-5 bg-white rounded">${data.officeNumber}</li>
            </ul>
            </div>
            <div class="card-footer bg-info"></div>
            </div>
            </div>
            
        `
    }
    ).join("")}
   
</div>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>   
</body>
</html>`


}

module.exports = generateIndex;

