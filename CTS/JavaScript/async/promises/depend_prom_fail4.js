var prom1 = new Promise((resolve, reject) => {
    return resolve("Promise1 is completed successfully")
});

var prom2 = new Promise((resolve, reject) => {
    return resolve("Promise2 is completed successfully")
});

var prom3 = new Promise((resolve, reject) => {
    return reject("Promise3 is failed")
});

var prom4 = new Promise((resolve, reject) => {
    return resolve("Promise4 is completed successfully")
});

Promise.all([prom1, prom2, prom3, prom4])
    .then(data => {
        console.log("Then block");
        console.log(data)
    })
    .catch(err => {
        console.log("catch block");
        console.log(err)
    })