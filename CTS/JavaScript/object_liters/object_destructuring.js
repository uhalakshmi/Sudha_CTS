
var employee={
    first_name: 'Anil',
    last_name: 'Ambani',
    job: 'Business',
    email: 'anil.ambani@gmail.com',
    mobile: 7788995544,
}
console.log(employee);
/*
var first_name = employee.first_name;
var last_name = employee.last_name;
var job = employee.job;
var email = employee.email;
var mobile = employee.mobile;
*/

var { email, first_name,  job, last_name,mobile } = employee

console.log("Employee First Name: ", first_name);
console.log("Employee Last Name: ", last_name);
console.log("Employee Job: ", job);
console.log("Employee Email: ", email);
console.log("Employee Mobile: ", mobile);




