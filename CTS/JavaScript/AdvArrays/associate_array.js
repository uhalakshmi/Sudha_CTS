var ar = [10, 20, 30, 40]


console.log(ar[-1]); //undefined
console.log(ar[-5]); //undefined
console.log(ar[-10]); //undefined


ar['ten'] = 100;

console.log(ar);

ar["apples"] = 100;
ar["mango"] = 150;

console.log(ar);
console.log(ar.length);

/*
for (var i = 0; i < ar.length; i++)
    console.log(ar[i]);
*/

for (var el of ar) {
    console.log(el);
}


console.log(ar["apples"]);
console.log(ar["mango"]);
console.log("===========================");
for (var key of ar.keys()) {
    console.log(ar[key]);
}

ar[-1] = 1000;
ar[-5] = 2000;
ar[-10] = 3000;

console.log(ar);
console.log(ar[-1]); 
console.log(ar[-5]); 
console.log(ar[-10]); 
    