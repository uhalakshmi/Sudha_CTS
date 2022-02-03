var emp = {
    first_name: "Anil",
    last_name: "Ambani"
}

// var emp2 = emp;

var emp2 = JSON.parse(JSON.stringify(emp));

console.log("emp: ", emp);
console.log("emp2: ", emp2);



console.log("After modify first_name on emp");
emp.first_name = "Akhil"
console.log("emp: ", emp);
console.log("emp2: ", emp2);
