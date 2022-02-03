const emp1 = {
    first_name: "Anil",
    last_name: "Ambani",
    full_name: function () {
        return this.first_name + " " + this.last_name;
    }
}

console.log(emp1.full_name());

const emp2 = {
    first_name: "Akhil",
    last_name: "Akkineni",
    full_name: function () {
        return this.first_name + " " + this.last_name;
    }
}
console.log(emp2.full_name());