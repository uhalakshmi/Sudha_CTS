
// Object Literal
var emp = {
    first_name: "Anil",
    last_name: "Ambani"
}
console.log(emp);
console.log(typeof emp);


// object creation using Object
var emp2 = new Object();
emp2.first_name = "Akhil";
emp2.last_name = "Akkinenie"
console.log(emp2);
console.log(typeof emp2);

// function based object creation
function Employee(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}
var emp3 = new Employee("Mukesh", "Ambani");
console.log(emp3);
console.log(typeof emp3);

// class based object creation
class Emp{
    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
}

var emp4 = new Emp("Murali Krishna", "Dokuparthi");
console.log(emp4);
console.log(typeof emp4);
