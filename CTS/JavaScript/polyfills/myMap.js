var ar = [10, 20, 30, 40];

var mod_ar = ar.map(el => el + 5);

console.log("original: ", ar);
console.log("Modified: ", mod_ar);

Array.prototype.myMap = function (callBack, thisVal) {
    var tras_ar = [];
    for (let ind = 0; ind < this.length; ind++){
        let trs_ele = callBack(this[ind], ind, this);
        tras_ar.push(trs_ele)
    }
    return tras_ar;
}

/*
const callBack = function (curVal, curInd, par) {
    
}
*/

var mod_ar2 = ar.myMap(el => el + 5);
console.log("Modified array using polyfilmap: ", mod_ar2);