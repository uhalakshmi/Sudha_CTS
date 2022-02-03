
var ar = [10, 20, 30, 40, 50, 60]
// for loop approach
console.log('for loop approach');
for(let i=0; i<ar.length; i++){
    console.log(ar[i]);
}

// Array forEach approach
console.log('Array forEach approach');
ar.forEach((val, ind, par)=>{
    console.log(val)
})

// for of approach
console.log('for of approach');
for (let val of ar) {
    console.log(val);
}