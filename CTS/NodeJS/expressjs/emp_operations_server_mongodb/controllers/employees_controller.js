var mongoClient = require('../config/db');
var db = mongoClient.db("cts");
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

const getMaxId = (idObjsList)=>{
    var idsList = idObjsList.map(ido => ido.id);
    if (idsList.length === 0) return 0;
    return Math.max(...idsList);
  }
// getting all employees
exports.getEmployees = function (req, res) {
  db.collection("c67_emps").find({}, {}).toArray(function (err, result) {
    console.log("DB Result: ", result);
    return res.send(result);
  })
    // return res.send(employeesList);
}
// creating new record
exports.addEmployee = function(req, res){
    let { body, params, query } = req;
    console.log("body: ", body);
    let emp = body;
  db.collection("c67_emps").find({}, { projection: {id:1, _id: 0}})
    .sort({ id: -1 }).limit(1)
    .toArray(function (err, result) {
      // [{ id: 7 }]
      let maxId = getMaxId(result);
      emp.id = maxId + 1;
      db.collection("c67_emps").insertOne(emp, function (err, result) {
        if (err) throw err;
        console.log(result);
        return res.send(emp);
      });
    })
    // res.send(emp);
}
// update employee
exports.updateEmployee = function (req, res) {
    let { body, params, query } = req;
    console.log("params: ", params);
    console.log("body: ", body);
  let clientEmp = body;
  db.collection("c67_emps").updateOne({ id: clientEmp.id }, { $set: clientEmp }, function (err, result) {
    if (err) console.log(err);
    console.log(result);
    if (!err)
      res.send({ status: "success"});
  })
  
    // let [oldEmp] = employeesList.filter(emp => emp.id == params.id);
    // oldEmp.emp_name = clientEmp.emp_name;
    // oldEmp.email = clientEmp.email;
    // oldEmp.job = clientEmp.job;
    // oldEmp.salary =  clientEmp.salary;
    
}
// delete employee
exports.deleteEmployee = function (req, res) {
    let { body, params, query } = req;
    console.log("params: ", params);
    // employeesList = employeesList.filter(emp => emp.id != params.id);
  db.collection("c67_emps").deleteOne({ id: (params.id-0) }, function (err, result) {
      if(err) console.log(err);
      return res.send({ status: "success" });
  })
}
