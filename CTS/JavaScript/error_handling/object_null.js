const emp = {
    first_name: 'Anil',
    last_name: "Ambani",
}

var emp2 = null;

try {
    console.log("I entered into try block");
    console.log(emp2.first_name);
    console.log("I am leving try block safely");
    
} catch (err) {
    console.log('I reached catch block');
    console.log(err);
    // console.log(err.message);
} finally {
    console.log("I will be executed at any case");
}

console.log("still I am alive");