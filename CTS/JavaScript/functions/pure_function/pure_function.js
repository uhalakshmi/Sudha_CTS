
var int_rate = 6;

var princ = 1500;

function calInt(prin) {
    let res = (prin * int_rate * 3) / 100;
    return res;
}

console.log(`Interest for princple amount ${princ} is: `, calInt(princ));