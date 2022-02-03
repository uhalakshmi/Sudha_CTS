function emp (){
    first_name = "Anil";
    last_name = "Ambani";
    
    return function full_name () {
        return first_name + " " + last_name;
    }
}

// console.log(emp);
var fullName = emp();
// console.log("Full Name: ", emp().full_name());
console.log("Full Name: ", fullName());