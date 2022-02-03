var emp1 = new Object();

emp1.first_name = 'Anil',
emp1.last_name = "Ambani"

console.log(emp1);

var emp2 = {
    first_name: "Akhil",
    last_name: "Akkineni"
}

    //  prototype
Object.prototype.fullName = function () {
    console.log(this.first_name+" "+this.last_name);
}


emp1.fullName();
emp2.fullName();