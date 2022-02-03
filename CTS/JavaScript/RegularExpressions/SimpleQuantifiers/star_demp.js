var re = new RegExp('ab*c');

console.log(re.test('ac'));
console.log(re.test('abc'));
console.log(re.test('abbc'));
console.log(re.test('abbbc'));
console.log(re.test('abbbbc'));
console.log(re.test('xyz'));
 
 
 
