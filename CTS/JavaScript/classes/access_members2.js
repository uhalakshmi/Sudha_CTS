class Employee{
    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name
    }
}

const emp1 = new Employee("Anil", "Ambani");

console.log(emp1);
console.log(typeof emp1);

console.log("First Name: ", emp1.first_name);
console.log("Last Name: ", emp1.last_name);