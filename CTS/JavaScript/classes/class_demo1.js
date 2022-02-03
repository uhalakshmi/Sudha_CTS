class Employee{
    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name
    }
}
// NOte: "this" means current Object.

const emp1 = new Employee("Anil", "Ambani");
const emp2 = new Employee("Mukesh", "Ambani");
const emp3 = new Employee("Akhil", "Akkineni");

console.log(emp1);
console.log(typeof emp1);

console.log(emp2);
console.log(typeof emp2);

console.log(emp3);
console.log(typeof emp3);