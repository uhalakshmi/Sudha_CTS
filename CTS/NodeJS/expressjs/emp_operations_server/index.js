var express = require('express');
var cors = require("cors");


var app = express();
app.use(cors());
app.use(express.json());
var employeesList = [
    {
      "emp_name": "Anil",
      "email": "anil@gmail.com",
      "job": "Business Analyst",
      "salary": "68000",
      "id": 1
    },
    {
      "emp_name": "Bharath",
      "email": "bharath@gmail.com",
      "job": "Manager",
      "salary": "78000",
      "id": 2
    }
]
const getMaxId = (employeesList)=>{
    var idsList = employeesList.map(emp => emp.id);
    if (idsList.length === 0) return 0;
    return Math.max(...idsList);
  }
app.get("/", function (req, res) {
    console.log("some thing");
    res.send("Welcome to my Home page.")
})
// getting all employees
app.get("/employees", function (req, res) {
    res.send(employeesList);
})
// creating new record
app.post("/employees", function(req, res){
    let { body, params, query } = req;
    console.log("body: ", body);
    let emp = body;
    let maxId = getMaxId(employeesList);
    emp.id = maxId + 1;
    employeesList.push(emp);
    console.log(employeesList);
    res.send(emp);
})
// update employee
app.put("/employees/:id", function (req, res) {
    let { body, params, query } = req;
    console.log("params: ", params);
    console.log("body: ", body);
    let clientEmp = body;
    let [oldEmp] = employeesList.filter(emp => emp.id == params.id);
    oldEmp.emp_name = clientEmp.emp_name;
    oldEmp.email = clientEmp.email;
    oldEmp.job = clientEmp.job;
    oldEmp.salary =  clientEmp.salary;
    res.send({ status: "success"});
})
// delete employee
app.delete("/employees/:id", function (req, res) {
    let { body, params, query } = req;
    console.log("params: ", params);
    employeesList = employeesList.filter(emp => emp.id != params.id);
    res.send({ status: "success" });
    
})
const PORT = 5005;
app.listen(PORT, function (err, res) {
    if (err) throw err;
    console.log(`Application is started successfull and running on port: ${PORT}`);
});


