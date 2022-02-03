var re = /\D/
var re2 = /[^0-9]/
console.log(re.test('hello world'));
console.log(re.test('1234hello world'));
console.log(re2.test('hello world1234'));
console.log(re.test('1234'));
console.log(re2.test('1234'))