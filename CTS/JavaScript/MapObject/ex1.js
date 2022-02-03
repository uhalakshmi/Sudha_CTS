// creation phase
var empMap = new Map();
// store data into map
empMap.set("first_name", "Anil")
empMap.set("last_name", "Ambani");
empMap.set("email", 'anil.ambani@gmail.com');

console.log(empMap);
// data retrieval from map
console.log("FirstName: ", empMap.get("first_name"));
console.log("LastName: ", empMap.get("last_name"));
console.log("Email: ", empMap.get("email"));

// verification againest key
console.log(empMap.has("job"));
console.log(empMap.has("email"));
console.log(empMap.has("age"));

// iterating map object entries 
empMap.forEach((curVal, curKey, pmap) => {
    console.log(curVal, curKey);
})

// size or length
console.log("Size of map =", empMap.size);

console.log(empMap.entries());
// iterating map object using entries 
for (let pair of empMap.entries()) {
    console.log(pair);
}
// iterating map object using entries version 2
for (let [key,val] of empMap.entries()) {
    console.log(key, val);
}

// deleting item from map object 
empMap.delete("email");
console.log(empMap);