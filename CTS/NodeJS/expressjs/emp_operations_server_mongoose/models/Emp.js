// Step 1
// import mongoose
const mongoose = require('mongoose');

// Step 2
// Create Schema
const empScheema = new mongoose.Schema({
    id: {type: Number, required: true},
    emp_name: {type: String, required: true, minlength: 3, maxLength: 15},
    email: {type: String, required: true},  
    job: {type: String},  
    salary: {type: Number, min: [1000, "Minimum Salary should be 1000."] , max: [90000, "Maximum allowed Salary shold be 90000"]}
});


// Step 3
// Create Model and export it.
const Emp = mongoose.model("c67_emp", empScheema);

module.exports = Emp;

