
 var emp = {
    first_name: "Anil",
    last_name: "Ambani"
}

var emp2 = emp;

console.log("emp: ", emp);
console.log("emp2: ", emp2);

console.log("After modify first_name on emp");
emp.first_name = "Akhil"
console.log("emp: ", emp);
console.log("emp2: ", emp2);

console.log("After modify last_name on emp2");
emp2.last_name = "Akkineni"
console.log("emp: ", emp);
console.log("emp2: ", emp2);