
function add(a, b=0) {
    console.log("a:", a, " b:", b);
    return a + b;
}


// var res = add(10, 20);
var res = add(10);
console.log("Sum of 10, 20 is", res);