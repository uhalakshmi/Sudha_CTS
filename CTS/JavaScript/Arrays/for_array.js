var fruits = ['Apple', "Banana", 'Mango', 'Orange'];

// traditional or for loop
for (var i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log('2nd approach using for-of');
// 2nd approach for-of
for (var fruit of fruits) {
    console.log(fruit);
}