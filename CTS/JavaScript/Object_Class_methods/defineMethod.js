var employee={
    first_name: 'Anil',
    last_name: 'Ambani',
    job: 'Business',
    email: 'anil.ambani@gmail.com',
    mobile: 7788995544,
}

console.log(employee);
// add new property to object

employee.age = 45;
console.log(employee);

Object.defineProperty(employee, 'new_property', { value: "some value" })
console.log(employee);

console.log(employee.new_property);
console.log(employee.some_property);