const emp1 = {
    first_name: "Anil",
    last_name: "Ambani",
}
console.log(emp1);

const emp2 = {
    first_name: "Akhil",
    last_name: "Akkineni",
}
console.log(emp2);

const fullName = function () {
    console.log(this.first_name + " " + this.last_name);
}

fullName.call(emp1);
var myFullName = fullName.bind(emp2);
var emp1FullName = fullName.bind(emp1);
emp1FullName();
myFullName();
myFullName();
myFullName();
emp1FullName();
myFullName();
emp1FullName();
myFullName();
