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

const fullName = function (city, state, country) {
    console.log(city);
    // console.log(params);
    console.log(this.first_name + " " + this.last_name + ` City: ${city}, State: ${state}, Country: ${country} `);
}
// const add1 = ["Mumbai"]
fullName.apply(emp1, ["Mumbai"]);
// const add2 =  ["Hyderabad", "TS"]
fullName.apply(emp2, ["Hyderabad", "TS"]);

const emp3 = {
    first_name: "Murali Krishna",
    last_name: "Dokuparthi",
}
// const add3 = ["Hyderabad", "TS", "India", "some thing"]
fullName.apply(emp3, ["Hyderabad", "TS", "India", "some thing"]);

fullName("Hyderabad", "TS", "India", "some thing");


