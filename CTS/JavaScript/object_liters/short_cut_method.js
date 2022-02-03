const emp = {
    first_name: "Anil",
    last_name: "Ambani",
    full_name () {
        return this.first_name + " " + this.last_name;
    }
}

console.log(emp);
console.log("Full Name: ", emp.full_name());