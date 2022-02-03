var employee={
    first_name: 'Anil',
    last_name: 'Ambani',
    job: 'Business',
    email: 'anil.ambani@gmail.com',
    mobile: 7788995544,
}

console.log(employee);
console.log("Before: ", Object.isSealed(employee));
Object.seal(employee);

console.log(employee);
console.log("After: ", Object.isSealed(employee));

// adding new property will be rejected
employee.age = 45;
console.log(employee);

// delete property will be rejected
delete employee.mobile;
delete employee.email;
console.log(employee);

// modify property will be allowed
employee.mobile = 7788998877
console.log(employee);