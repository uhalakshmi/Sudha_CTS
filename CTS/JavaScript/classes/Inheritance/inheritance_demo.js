class Person{
    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
}

class Employee extends Person{
    constructor(first_name, last_name, job) {
        super(first_name, last_name);
        this.job = job;
    }
}

var emp1 = new Employee("Anil", "Ambani", "Business")
console.log(emp1);

console.log(emp1 instanceof Employee);
console.log(emp1 instanceof Person);
console.log(emp1 instanceof Object);
class Animals { }
class Vehicle { }
console.log(emp1 instanceof Animals);
console.log(emp1 instanceof Vehicle);
