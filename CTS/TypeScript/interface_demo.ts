interface Employee{
    eno: number;
    ename: string;
    email: string;
    job: string;
    salary: number;
    is_prob_com?: boolean;
}


var emp11 = {
    first_name: 'anil',
    last_name: 'ambani',
    email: 'anil.ambani@gmail.com'
}

var emp12: Employee={
    eno: 101,
    ename: 'Mukesh',
    email: 'mukesh@gmail.com',
    job: 'Business',
    salary: 56000,
    // is_prob_com: true,
}

console.log(emp12);
