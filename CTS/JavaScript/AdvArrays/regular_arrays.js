var ar = [10, 20, 30, 40]

// int arr[5];
console.log(ar);

ar[2] = 50;
console.log(ar);

ar.push(60)
console.log(ar);
ar[5] = 65;
console.log(ar);

console.log(ar[50]);

ar[100] = 1000;

console.log(ar);

/*
for (var i = 0; i < ar.length; i++)
    console.log(ar[i]);
*/

for (var el of ar) {
    console.log(el);
}
    