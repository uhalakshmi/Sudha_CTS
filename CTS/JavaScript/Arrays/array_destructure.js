
var fruits = ['Apple', "Banana", 'Mango', 'Orange'];
var first, second, third, fourth;
// case 1
// [first, second, third, fourth] = fruits;

console.log(fruits);
console.log(first, second, third, fourth);

// case2
// [first, , third, fourth] = fruits;

console.log(first, second, third, fourth);


// case3
// [first, second,] = fruits;
console.log(first, second, third, fourth);

// third = fruits[2];
// fourth = fruits[3]

[, ,third, fourth] = fruits;
console.log(first, second, third, fourth);


