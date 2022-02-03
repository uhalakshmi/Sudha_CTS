var ar = [10, 20, 30, 40, 50];
console.log("Original Array: ", ar);
var total = ar.reduce((tot, ele, ind) => {
    console.log(`tot: ${tot}, ele: ${ele}, ind: ${ind}`);
    return tot + ele
}, 0);

console.log("Total of Array: ", total);

Array.prototype.myReduce = function (callBack, iniVal=0) {
    let total = 0;
    /*
    if (iniVal)
        total = iniVal;
    else
        total = 0;
    */
    
    // total = iniVal ? iniVal : 0;

    total = iniVal;

    for (let ind = 0; ind < this.length; ind++){
        let res = callBack(total, this[ind], ind, this);
        total = res;
    }
    return total;
}

var total2 = ar.myReduce((tot, ele, ind) => {
    console.log(`tot: ${tot}, ele: ${ele}, ind: ${ind}`);
    return tot + ele
}, 0);
console.log("Total of Array: ", total2);