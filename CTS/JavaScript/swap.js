var n1 = 10;
var n2 = 20;

console.log("Before Swapping");
console.log(`n1 = ${n1} and n2 = ${n2}`);
//first approach
// temp = n1;
// n1 = n2;
// n2 = temp;


// second approach
// n1 = n1 + n2;
// n2 = n1 - n2;
// n1 = n1 - n2;

[n1, n2] = [n2, n1];

console.log("After Swapping");
console.log(`n1 = ${n1} and n2 = ${n2}`);