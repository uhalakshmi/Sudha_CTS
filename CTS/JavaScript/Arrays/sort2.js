var ar = [15, 18, 20, 22, 16, 19, 14, 21, 5, 3, 4];

console.log(ar);
ar.sort((a, b)=> a-b)
console.log(ar);

ar.sort((a, b)=> b-a)
console.log(ar);