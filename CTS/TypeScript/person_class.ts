class Person2{
    private first_name: string;
    private last_name: string;
    constructor(first_name: string, last_name: string) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    
    fullName() {
        console.log(this.first_name+" "+this.last_name);
        
    }
}
var per1 = new Person2('Anil', 'Ambani');
console.log(per1);
per1.fullName();
