function add(a:number, b:number):number {
    let res: number|string;
    res = a + b;
    return res;
}

var no1 = 100;
var no2 = 200;
// no2 = 'anul'
var add_res = add(no1, no2);
console.log("sum of 100, 200 is: ", add_res);

// var add_res2 = add('hello', ' world');
/*
function add(a:number|string, b:number|string):number|string {
    let res: number|string;
    res = a + b;
    return res;
}
*/