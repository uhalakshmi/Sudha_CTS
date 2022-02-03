var st1 = "Hi, do you know your abc's?";
var st2 = "The latest airplane designs evolved from slabcraft."
var st3 = "Grab crab";

var substr = 'abc'
// Normal approach using strings
console.log(st1.includes(substr));
console.log(st2.includes(substr));
console.log(st3.includes(substr));

//using regular expression literal
var re = /abc/
// using regular expressions with match()
console.log(st1.match(re));
console.log(st2.match(re));
console.log(st3.match(re));

// using regular expressions with search()
console.log(st1.search(re));
console.log(st2.search(re));
console.log(st3.search(re));



//using regular expression Object
var re = new RegExp('abc');
console.log(re.test(st1));
console.log(re.test(st2));
console.log(re.test(st3));