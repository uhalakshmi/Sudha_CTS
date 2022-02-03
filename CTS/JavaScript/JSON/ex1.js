var employee={
    first_name: 'Anil',
    last_name: 'Ambani',
    job: 'Business',
    email: 'anil.ambani@gmail.com',
    mobile: 7788995544,
}
console.log(employee);
console.log(typeof employee);

var st_employee = JSON.stringify(employee);

console.log(st_employee);
console.log(typeof st_employee);

var prs_empolyee = JSON.parse(st_employee);
console.log(prs_empolyee);
console.log(typeof prs_empolyee);
