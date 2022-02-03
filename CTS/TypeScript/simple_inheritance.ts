class Person1{
    protected first_name: string;
    protected last_name: string;
    protected email: string;
    protected mobile: string;
    constructor(first_name: string, last_name: string, email: string, mobile: string) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.mobile = mobile;
    }
    
    fullName() {
        console.log(this.first_name+" "+this.last_name);
        
    }
}
class Employee1 extends Person1{
    private job: string;
    private is_prob_completed: boolean;
    private salary: number;
    constructor(first_name: string, last_name: string,
        email: string, mobile: string, job: string, is_prob_completed: boolean, salary: number) {
        super(first_name, last_name, email, mobile);
        this.job = job;
        this.is_prob_completed = is_prob_completed;
        this.salary = salary;
    }
    showEmployeeInfo() {
        console.log("FirstName: ", this.first_name);
        console.log("LastName: ", this.last_name);
        console.log("Email: ", this.email);
        console.log("Mobile: ", this.mobile);
        console.log("Job: ", this.job);
        console.log("Is Prob Completed: ", this.is_prob_completed);
        console.log("Salary: ", this.salary);
        
    }
}

var emp1 = new Employee1("Anil", "Ambani", "anil.ambani@gmail.com",
                            '8899775588', 'Business Analyst', true, 990000
);
emp1.showEmployeeInfo();
// console.log(emp1.first_name);
