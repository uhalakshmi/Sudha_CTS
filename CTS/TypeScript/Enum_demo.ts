enum Gender{
    MALE=100,
    FEMALE,
    NOT_INTERESTED_TO_DISCLOASE
}


class Person3{
    private first_name: string;
    private last_name: string;
    private gender: Gender;
    constructor(first_name: string, last_name: string, gender: Gender) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = gender;
    }
    
    personInfo() {
        console.log("FirstName: ", this.first_name);
        console.log("LastName: ", this.last_name);
        console.log("Gender: ", this.gender);
    }
}
var per11 = new Person3('Anil', 'Ambani', Gender.MALE);
console.log(per11);
per11.personInfo();

var per12 = new Person3('Amala', 'Akkineni', Gender.FEMALE);
console.log(per12);
per12.personInfo();