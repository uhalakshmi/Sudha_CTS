
var employee={
    first_name: 'Anil',
    last_name: 'Ambani',
    job: 'Business',
    email: 'anil.ambani@gmail.com',
    mobile: 7788995544,
}


console.log(employee);


for (var key in employee) {
    console.log(`${key}: ${employee[key]}`);
}


console.log(employee.job);
var property_name = 'job';

// employee[property_name]
console.log( employee[property_name]);
