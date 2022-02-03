var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 100] = "MALE";
    Gender[Gender["FEMALE"] = 101] = "FEMALE";
    Gender[Gender["NOT_INTERESTED_TO_DISCLOASE"] = 102] = "NOT_INTERESTED_TO_DISCLOASE";
})(Gender || (Gender = {}));
var Person3 = /** @class */ (function () {
    function Person3(first_name, last_name, gender) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = gender;
    }
    Person3.prototype.personInfo = function () {
        console.log("FirstName: ", this.first_name);
        console.log("LastName: ", this.last_name);
        console.log("Gender: ", this.gender);
    };
    return Person3;
}());
var per11 = new Person3('Anil', 'Ambani', Gender.MALE);
console.log(per11);
per11.personInfo();
var per12 = new Person3('Amala', 'Akkineni', Gender.FEMALE);
console.log(per12);
per12.personInfo();
