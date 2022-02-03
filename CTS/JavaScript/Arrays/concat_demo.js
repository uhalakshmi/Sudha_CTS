var fruits = ['Apple', "Banana", 'Mango', 'Orange'];
var ar = [10, 20, 30, 40, 50];


var res = fruits.concat(ar, [100, 200]);
console.log(fruits);
console.log(ar);
console.log(res);

var res2 = fruits.concat(10, 20, 30);
console.log(res2);