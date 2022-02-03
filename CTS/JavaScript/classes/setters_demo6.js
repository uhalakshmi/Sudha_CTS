class Employee{
    constructor(first_name, last_name) {
        this.first_name = first_name;//public property
        this.last_name = last_name//public property
        this.age = 40;
    }

    // java based getters
    getFirstName() {
        return this.first_name;
    }
    getLastName() {
        return this.last_name;
    }
    // java based setters
    setFirstName(first_name) {
        this.first_name = first_name;
    }
    setLastName(last_name) {
        this.last_name = last_name
    }

    // js/ts/.net based getters
    get firstName() {
        return this.first_name;
    }
    get lastName() {
        return this.last_name;
    }
    // js/ts/.net based setters
    set firstName(first_name) {
        this.first_name = first_name;
    }
    set lastName(last_name) {
        this.last_name = last_name;
    }

    fullName() {
        console.log(this.first_name + " " + this.last_name);
    }
}

var emp1 = new Employee("Anil", "Ambani");

console.log(emp1);
emp1.fullName()

// accessing properties directly since those are public
console.log('accessing properties directly since those are public');
console.log("FirstName: ", emp1.first_name);
console.log("LastName: ", emp1.last_name);

// accessing properties by using java based getters
console.log('accessing properties by using java based getters');
console.log("FirstName: ", emp1.getFirstName());
console.log("LastName: ", emp1.getLastName());

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


// this is the way of invoking java based setters
emp1.setFirstName("Mukesh");

// accessing properties by using java based getters
console.log('accessing properties by using java based getters');
console.log("FirstName: ", emp1.getFirstName());
console.log("LastName: ", emp1.getLastName());
