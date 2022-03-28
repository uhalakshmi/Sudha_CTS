// step 1
var mongoose = require('mongoose');

let url = "mongodb://localhost:27017/cts"
mongoose.connect(url, function (err, result) {
    if (!err)
        console.log("DB is connected successfully...");
});
// step 2
// preparing scheem 
const empScheema = new mongoose.Schema({
    id: Number,
    emp_name: String,
    email: String,  
    job: String,  
    salary: Number
});


// step 3
// preparing Model
// Model is nothing but a class
// mongoose.model("collection name", "scheema")
const Emp = mongoose.model("c67_emps", empScheema);

Emp.deleteOne().where({emp_name: "Vimal"}).exec(function (err, result) {
    console.log(result);
})




