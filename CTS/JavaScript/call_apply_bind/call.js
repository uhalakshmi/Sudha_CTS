const emp1 = {
    first_name: "Anil",
    last_name: "Ambani",
}
console.log(emp1);

const emp2 = {
    first_name: "Akhil",
    last_name: "Akkineni",
    
}
console.log(emp2);

const fullName = function () {
    console.log(this.first_name + " " + this.last_name);
}

fullName.call(emp1)
fullName.call(emp2)

const emp3 = {
    first_name: "Rama Krishna",
    last_name: "Veeramachaneni",
    
}
console.log(emp3);
fullName.call(emp3)