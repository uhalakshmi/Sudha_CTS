class Employee {
    first_name: string;
    private last_name: string;
    constructor(first_name: string, last_name: string) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    fullName():void {
        console.log(this.first_name + " "+ this.last_name);
    }
}

var emp21 = new Employee("Anil", "Ambani");
console.log(emp21);
console.log("first_name: ", emp21.first_name);
// console.log("last_name: ", emp21.last_name);
emp21.fullName();


