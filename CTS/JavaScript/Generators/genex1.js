
function* hello() {
    yield 10;
    yield 20
    yield 30
}

var h1 = hello();

console.log(h1.next());
console.log(h1.next());
console.log(h1.next());
console.log(h1.next());
console.log(h1.next());
console.log(h1.next());
console.log(h1.next());
console.log(h1.next());
console.log(h1.next());