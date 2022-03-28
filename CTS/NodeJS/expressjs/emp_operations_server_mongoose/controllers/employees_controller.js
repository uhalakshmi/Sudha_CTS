// var mongoClient = require('../config/db');
// var db = mongoClient.db("cts");ire
const Emp = require('../models/Emp');

const getMaxId = (idObjsList)=>{
    var idsList = idObjsList.map(ido => ido.id);
    if (idsList.length === 0) return 0;
    return Math.max(...idsList);
}
  
// getting all employees
exports.getEmployees = function (req, res) {
  try {
    Emp.find().exec(function (err, result) {
          console.log("DB Result: ", result);
          return res.send(result);
        }
    )
  } catch (err) {
    return res.status(500).send(err.toString());
  }
}
// creating new record
exports.addEmployee = function(req, res){
    let { body, params, query } = req;
    console.log("body: ", body);
  let empDocument = body;
  
  try {
    Emp.find().select({ id: 1, _id: 0 })
      .sort({ id: -1 }).limit(1)
      .exec(function (err, result) {
        let maxId = getMaxId(result);
        empDocument.id = maxId + 1;
        const emp = new Emp(empDocument);
        emp.save(function (err, result) {
          if (err) {
            // throw err;
            console.log(err);
            return res.status(400).send(err);
          }
          console.log(result);
          return res.send(emp);
        });
    })
  } catch (err) {
    return res.status(500).send(err.toString());
  }
}
// update employee
exports.updateEmployee = function (req, res) {
    let { body, params, query } = req;
    console.log("params: ", params);
    console.log("body: ", body);
    let clientEmp = body;
    Emp.updateOne({ id: clientEmp.id }, clientEmp).exec(function (err, result) {
      if (err) console.log(err);
      console.log(result);
      if (!err)
        res.send({ status: "success"});
    })
}

// delete employee
exports.deleteEmployee = function (req, res) {
    let {  params, } = req;
    console.log("params: ", params);
    Emp.deleteOne({ id: (params.id-0) }).exec(function (err, result) {
      if(err) console.log(err);
      return res.send({ status: "success" });
  })
}
