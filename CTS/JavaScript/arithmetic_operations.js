var first_no = 10;
var second_no = 2;

var add, sub, mul, div, mod, pow;

add = first_no + second_no;
sub = first_no - second_no;

mul = first_no * second_no;
div = first_no / second_no;
mod = first_no % second_no;
pow = first_no ** second_no;

console.log(first_no + " + " + second_no + " = " + add);
console.log(first_no, " - ", second_no, " = ", sub);
console.log(`${first_no} * ${second_no} = ${mul}`);//template string
console.log(`${first_no} / ${second_no} = ${div}`);
console.log(`${first_no} % ${second_no} = ${mod}`);
console.log(`${first_no} ** ${second_no} = ${pow}`);

