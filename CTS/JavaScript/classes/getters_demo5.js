class Employee{
    constructor(first_name, last_name) {
        this.first_name = first_name;//public
        this.last_name = last_name//public
        this.age = 40;
    }

    getFirstName() {
        return this.first_name;
    }
    getLastName() {
        return this.last_name
    }

    get firstName() {
        return this.first_name;
    }
    get lastName() {
        return this.last_name
    }

    fullName() {
        console.log(this.first_name + " " + this.last_name);
    }
}

var emp1 = new Employee("Anil", "Ambani");

console.log(emp1);
emp1.fullName();
// using of accessors
console.log("First Name: ", emp1.first_name);
console.log("Last Name: ", emp1.last_name);
// using of java based getter
console.log("First Name: ", emp1.getFirstName());
console.log("Last Name: ", emp1.getLastName());
// accessing properties using getters
console.log("First Name: ", emp1.firstName);
console.log("Last Name: ", emp1.lastName);



