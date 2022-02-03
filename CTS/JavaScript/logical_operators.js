


var a = 10;
console.log("Short Circuit behaviour or &&");
console.log(10 > 15 && 5 < ++a);
console.log(a);

console.log("Short Circuit behaviour or ||");
console.log(10 < 15 || 5 < ++a);
console.log(a);