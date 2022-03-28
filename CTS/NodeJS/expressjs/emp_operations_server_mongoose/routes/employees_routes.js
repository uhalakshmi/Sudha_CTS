var express = require('express');
var empMidWr = require('../middlewares/emp_middlewares');
var employeesController = require("../controllers/employees_controller")

var router = express.Router();

// getting all employees
router.get("/employees",  employeesController.getEmployees)
// creating new record
router.post("/employees", empMidWr.midw1,
    empMidWr.midw2,
    empMidWr.midw3,
    empMidWr.midw4, 
    employeesController.addEmployee)
// update employee
router.put("/employees/:id", employeesController.updateEmployee)
// delete employee
router.delete("/employees/:id", employeesController.deleteEmployee)

module.exports = router;