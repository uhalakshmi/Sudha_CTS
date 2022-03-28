var express = require('express');
var employeesController = require("../controllers/employees_controller")

var router = express.Router();
console.log("employeesController: ", employeesController);
// getting all employees
router.get("/employees", employeesController.getEmployees)
// creating new record
router.post("/employees", employeesController.addEmployee)
// update employee
router.put("/employees/:id", employeesController.updateEmployee)
// delete employee
router.delete("/employees/:id", employeesController.deleteEmployee)

module.exports = router;