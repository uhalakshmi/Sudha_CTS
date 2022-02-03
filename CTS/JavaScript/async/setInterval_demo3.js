function someFun() {
    var dt = new Date();
    var stime = `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`;
    console.log(stime);
}

var s1 = setInterval(someFun, 1000)
console.log("Hello");

setTimeout(() => {
    clearInterval(s1)  
}, 15000)
