// step 1
var mongoose = require('mongoose');

main()
    .then(() => console.log("DB connected successfully"))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/cts');
}

// step 2
// preparing scheem 
const empScheema = new mongoose.Schema({
    id: {type: Number, required: true},
    emp_name: {type: String, required: true, minlength: 3, maxLength: 15},
    email: {type: String, required: true},  
    job: {type: String},  
    salary: {type: Number, min: [1000, "Minimum Salary should be 1000."] , max: [90000, "Maximum allowed Salary shold be 90000"]}
});


// step 3
// preparing Model
// Model is nothing but a class
// mongoose.model("collection name", "scheema")
const Emp = mongoose.model("c67_emps", empScheema);

const document = {
    id: "11",
    emp_name: "Vinay",
    email: "vinay@gmail.com",
    job: "Analyst", 
    salary: "50000"
}
const emp = new Emp(document);
emp.save(function (err, result) {
    // console.log("err: ", err);
    if (err) {
        console.log("message: ", err.message);
        console.log("Status: ", "Document save is failed due to errors");
    }
    console.log("result: ", result);
});




