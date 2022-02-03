var re = new RegExp('^He')
var re2 = new RegExp('^Hen')
console.log(re.test("Hello World"));
console.log(re2.test("Hello World"));

var re3 = new RegExp('ltd$')
var re4 = new RegExp('rld$')
console.log(re3.test("Hello World"));
console.log(re4.test("Hello World"));

var re5 = new RegExp('\bHe')
var re6 = new RegExp('\bHen')
console.log(re5.test("Hello World"));
console.log(re6.test("Hello World"));

var re7 = new RegExp('\bm')
var re8 = new RegExp('oo\b')
console.log(re7.test("moon"));
console.log(re8.test("moon"));