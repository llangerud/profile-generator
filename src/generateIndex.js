const Manager = require("../lib/manager.js");
const Engineer = require("../lib/engineer.js");
const Intern = require ("../lib/intern");
const index = require('../index');


//data.forEach (object => console.log(object.getName((object))));

//gets the data from the team array, converts to a string (template literal) and sends back to generateTemplate



function generateIndex (data) {
console.log(data.length);
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>profile-generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <h1 class="display-4">My Team</h1></div>
        <div class = "container">
${data.map(function teamMember (teamMember) {
return `<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${teamMember.getRole()}</h5>
<ul class="list-group list-group-flush">
<li class="list-group-item">Cras justo odio</li>
<li class="list-group-item">Dapibus ac facilisis in</li>
<li class="list-group-item">Vestibulum at eros</li>
</ul>
<a href="#" class="card-link">Card link</a>
</div>
</div>`
}).join("")}   
</div>

      

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>   
</body>
</html>`


}





// function generateIndex (data) {
// console.log(data);


//     for (i=0; i<data.length; i++) {
// `<div class="card" style="width: 18rem;">
// <img src="..." class="card-img-top" alt="...">
// <div class="card-body">
//   <h5 class="card-title">${data[i].name}}</h5>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">Cras justo odio</li>
//     <li class="list-group-item">Dapibus ac facilisis in</li>
//     <li class="list-group-item">Vestibulum at eros</li>
//   </ul>
//   <a href="#" class="card-link">Card link</a>
// </div>
// </div>`
// }





//create the function

//call the function

//assign the return value to a variable

//use the variable inside the template literal 









   

module.exports = generateIndex;



    // function generateTemplate() {
    //     //code that generates the HTML file with the inputs from inquirer//
    //     fs.writeFile("./dist/index.html", generateIndex(data) (err) =>
    //     err ? console.error(err) : console.log('generating your HTML file')
    //     )
    // }