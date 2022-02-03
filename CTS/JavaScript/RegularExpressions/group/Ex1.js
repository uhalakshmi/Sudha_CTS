var re = new RegExp('[abc]');

console.log(re.test('hello world'));

var re2 = new RegExp('[aeiou]');
console.log(re2.test('hello world'));

var re3 = new RegExp('[^xyz]');
console.log(re3.test('hello world'));
