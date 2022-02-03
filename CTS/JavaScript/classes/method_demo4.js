class Employee{
    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name
    }
    fullName() {
        console.log(this.first_name + " " + this.last_name);
    }
}

var emp1 = new Employee("Anil", "Ambani");

console.log(emp1);
emp1.fullName();


