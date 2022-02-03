var ar = [10, 20, 30, 40];

console.log(ar);

//map need a callable function 
//map finally return modified array
// map does not causes modify original array or host array
var modify_ar = ar.map((ele, ind, par) => {
    console.log(ele, ind, par);
    return ele + 5
});

console.log(modify_ar);
console.log(ar);