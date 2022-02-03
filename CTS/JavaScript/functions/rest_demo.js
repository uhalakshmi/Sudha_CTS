// console.log(Math.max(10, 20, 35, 5));


function add(a, b=0, ...params ) {
    console.log("a:", a, " b:", b, " params: ", params);
    // console.log(params);
    var tot = params.reduce((total, y) => total + y, 0);
    return a + b + tot;
}

// var res = add(10, 20);
// var res = add(10);
// var res = add(10, 20, 30);
// var res = add(10, 20, 30, 40);
// var res = add(10, 20, 30, 40, 50);
var res = add(10, 20, 30, 40, 50, 60);
console.log("Sum of given parameters is", res);