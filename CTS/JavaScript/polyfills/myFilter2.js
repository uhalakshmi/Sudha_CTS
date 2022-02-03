var ppls = [15, 22, 18, 17, 21, 14, 20];

var majors = ppls.filter(el => el >= 18);
console.log("original array: ", ppls);
console.log("filtered array: ", majors);

Array.prototype.myFilter = function (callBack, thisValue) {
    var filteed_arr = [];
    for (let ind = 0; ind < this.length; ind++){
        let resFlag = callBack(this[ind], ind, this);
        if (resFlag)
            filteed_arr.push(this[ind]);
    }
    return filteed_arr;
}


var majors2 = ppls.myFilter(el => el >= 18);
console.log("filtered array: ", majors2);

