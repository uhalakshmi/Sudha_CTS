var fruits = ['Mango', "Banana", 'Apple', 'Orange'];


console.log(fruits.keys());

var keys = fruits.keys();

for (var key of keys) {
    console.log(key, fruits[key]);
}