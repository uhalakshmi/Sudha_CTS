var ar = [10, 12, 18, 22, 26, 15, 24, 9]
var majars = ar.filter((currVal, ind, par) => currVal >= 18);

console.log("original: ", ar);
console.log("Majars: ", majars);

Array.prototype.myFilter = function (callBack) {
    var filterArr = [];

    for (let ind = 0; ind < this.length; ind++){
        callBack(this[ind], ind, this) ? filterArr.push(this[ind]): null
    }
    return filterArr;
}

var majars2 = ar.myFilter((currVal, ind, par) => currVal >= 18);
console.log("Majars using myFilter: ", majars);

