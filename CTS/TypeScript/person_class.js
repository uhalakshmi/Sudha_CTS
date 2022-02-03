var Person = /** @class */ (function () {
    function Person(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    Person.prototype.fullName = function () {
        console.log(this.first_name + " " + this.last_name);
    };
    return Person;
}());
var per1 = new Person('Anil', 'Ambani');
console.log(per1);
per1.fullName();
