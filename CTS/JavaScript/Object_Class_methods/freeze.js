
var employee={
    first_name: 'Anil',
    last_name: 'Ambani',
    job: 'Business',
    email: 'anil.ambani@gmail.com',
    mobile: 7788995544,
}

console.log(employee);
console.log("Before: ", Object.isFrozen(employee));
Object.freeze(employee)
console.log(employee);
console.log("After: ", Object.isFrozen(employee));

// adding new property will be rejected
employee.age = 45;
console.log(employee);

// modifying property
employee.mobile = 7788998877;
console.log(employee);

// delete property
delete employee.email;
delete employee.mobile;
console.log(employee);