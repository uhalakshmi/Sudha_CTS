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
    emp_name: {type: String, required: true, milength: 2, maxlength: 30},
    email: {type: String, required: true},  
    job: {type: String},  
    salary: {type: Number, min: 1000, max: 90000}
});


// step 3
// preparing Model
// Model is nothing but a class
// mongoose.model("collection name", "scheema")
const Emp = mongoose.model("c67_emps", empScheema);

const document = {
    id: "10",
    emp_name: "V",
    email: "vijay@gmail.com",
    job: "Analyst", 
    salary: 40000
}
const emp = new Emp(document);
emp.save(function (err, result) {
    // console.log("err: ", err);
    if(err) console.log("message: ", err.message);
    console.log("result: ", result);
});




