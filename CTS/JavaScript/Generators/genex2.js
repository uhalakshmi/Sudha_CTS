var ar = [10, 20, 30, 40, 50, 60]

function* genAr(par) {
    for (let val of par) {
        yield val;
    }
}

var g1 = genAr(ar);

console.log((g1.next()));
console.log((g1.next()));
console.log((g1.next()));

var frouits = ['mango', 'banana', 'apple', 'grapes']

var fruitsGen = genAr(frouits);
console.log(fruitsGen.next());
console.log(fruitsGen.next());