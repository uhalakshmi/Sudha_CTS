var ar = [10, 20, 30, 40];

var mod_ar = ar.map((curEle, curInd, par) => {
    console.log(`curEle: ${curEle}, curInd: ${curInd}, actual Array: ${par}`);
    return curEle + 5
});