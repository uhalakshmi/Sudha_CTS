class Employee{
    #firstName;
    #lastName
    constructor(first_name, last_name) {
        this.#firstName = first_name;//private property
        this.#lastName = last_name//private property
        // this._age = 40;
    }
    // js/ts/.net based getters
    get firstName() {
        return this.#firstName;
    }
    get lastName() {
        return this.#lastName;
    }
    /*
    get age() {
        return this._age;
    }
    */
    // js/ts/.net based setters
    set firstName(first_name) {
        this.#firstName = first_name;
    }
    set lastName(last_name) {
        this.#lastName = last_name;
    }
    /*
    set age(page) {
        this._age = page;
    }
    */
    fullName() {
        console.log(this.#firstName + " " + this.#lastName);
    }
}

var emp1 = new Employee("Anil", "Ambani");

console.log(emp1);
emp1.fullName()

// accessing properties directly since those are public
console.log('accessing properties directly since those are public');
// console.log("FirstName: ", emp1.#firstName);
// console.log("LastName: ", emp1.#lastName);

// accessing properties by using js/ts/.net based getters
console.log('accessing properties by using js/ts/.net based getters');
console.log("FirstName: ", emp1.firstName);
console.log("LastName: ", emp1.lastName);

// this is the way of invoking js/ts/.net based setters
emp1.firstName = "Mukesh";

// accessing properties by using js/ts/.net based getters
console.log('accessing properties by using js/ts/.net based getters');
console.log("FirstName: ", emp1.firstName);
console.log("LastName: ", emp1.lastName);

// emp1.age = 50;
console.log(emp1);