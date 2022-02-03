var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person1 = /** @class */ (function () {
    function Person1(first_name, last_name, email, mobile) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.mobile = mobile;
    }
    Person1.prototype.fullName = function () {
        console.log(this.first_name + " " + this.last_name);
    };
    return Person1;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(first_name, last_name, email, mobile, job, is_prob_completed, salary) {
        var _this = _super.call(this, first_name, last_name, email, mobile) || this;
        _this.job = job;
        _this.is_prob_completed = is_prob_completed;
        _this.salary = salary;
        return _this;
    }
    Employee1.prototype.showEmployeeInfo = function () {
        console.log("FirstName: ", this.first_name);
        console.log("LastName: ", this.last_name);
        console.log("Email: ", this.email);
        console.log("Mobile: ", this.mobile);
        console.log("Job: ", this.job);
        console.log("Is Prob Completed: ", this.is_prob_completed);
        console.log("Salary: ", this.salary);
    };
    return Employee1;
}(Person1));
var emp1 = new Employee1("Anil", "Ambani", "anil.ambani@gmail.com", '8899775588', 'Business Analyst', true, 990000);
emp1.showEmployeeInfo();
