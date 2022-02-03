var Employee = /** @class */ (function () {
    function Employee(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    Employee.prototype.fullName = function () {
        console.log(this.first_name + " " + this.last_name);
    };
    return Employee;
}());
var emp21 = new Employee("Anil", "Ambani");
console.log(emp21);
console.log("first_name: ", emp21.first_name);
// console.log("last_name: ", emp21.last_name);
emp21.fullName();
