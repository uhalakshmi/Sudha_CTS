
var employee={
    first_name: 'Anil',
    last_name: 'Ambani',
    job: 'Business',
    email: 'anil.ambani@gmail.com',
    mobile: 7788995544,
}

console.log(employee);
// adding new property
/*
employee.age = 45;
console.log(employee);
*/
console.log("adding new property");
var new_prop = 'age';
employee[new_prop] = 40;
console.log(employee);

// modifying property value
console.log("modifying property value");
employee.mobile = 7788998877
console.log(employee);

employee['mobile'] = 7788998866
console.log(employee);

// delete property
console.log("delete property");
delete employee.email;
delete employee['mobile'];
delete employee[new_prop];
console.log(employee);
