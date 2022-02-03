var score = 30;
console.log("step - 1");
var prom = new Promise((resolve, reject) => {
    if (score > 35) {
        console.log('I am from success block of promises');
        return resolve("promisess is completed successfully");
    } else {
        console.log('I am from failure block of promises');
        return reject("promisess is completed with failure");
    }
});

console.log("step - 2");
// it is jumped
prom.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})

console.log("step - 3");
console.log('End of program');