function employee (){
    first_name = "Anil";
    last_name = "Ambani";

    function getFirstName() {
        return first_name;
    }
    function getLastName() {
        return last_name;
    }
    function setFirstName(fn){
        first_name = fn;
    }
    function setLastName(ln) {
        last_name = ln;
    }
    return this;
    /*
    return function full_name () {
        return first_name + " " + last_name;
    }
    */
}


var emp = employee();

console.log(emp.getFirstName());