var employee={
    first_name: 'Anil',
    last_name: 'Ambani',
    job: 'Business',
    email: 'anil.ambani@gmail.com',
    mobile: 7788995544,
}
/*
var output = [
    { first_name: 'Anil' },
    { last_name: 'Ambani' },
    { job: 'Business' },
    { email: 'anil.ambani@gmail.com' },
    { mobile: 7788995544 }
]
*/
var output = [];
for (var key of Object.keys(employee)) {
    console.log(key, employee[key]);
    output.push({[key]:employee[key]})
}
console.log(employee);
console.log(output);

/**
 * 1)Object.keys 
 * 2)object variable property
 * 3)object variable property
 */

console.log(employee);

console.log(Object.values(employee));

console.log(Object.keys(employee));

console.log(Object.entries(employee));


