
var int_rate = 4;

var princ = 1500;

function calInt(prin, intRate) {
    let res = (prin * intRate * 3) / 100;
    return res;
}

console.log(`Interest for princple amount ${princ} with interest rate: ${int_rate} is: `, calInt(princ, int_rate));