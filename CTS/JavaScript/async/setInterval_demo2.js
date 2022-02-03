function someFun() {
    console.log("This is someFun");
}


var s1 = setInterval(someFun, 1000)
console.log("Hello");
setTimeout(() => {
    clearInterval(s1)  
}, 5000)
