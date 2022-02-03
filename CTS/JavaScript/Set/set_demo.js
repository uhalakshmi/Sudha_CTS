var ar = [10, 20, 10, 30, 25, 20, 10];
console.log(ar);

var s1 = new Set(ar);
console.log(s1);

var ar2 = [...s1]
console.log(ar2);


//var total =  ar.reduce((tot, ele)=>tot+ele, 0)
// var ar = [10, 20, 10, 30, 25, 20, 10];
var ind = 1;
var uniqueArr = ar.reduce((uniqueAr, curEle) => {
    console.log(ind++, uniqueAr, curEle);
    if (uniqueAr.includes(curEle)) {
        return uniqueAr
    } else{
        uniqueAr.push(curEle);
        return uniqueAr;
    }
}, [])

console.log(uniqueArr);
/*
1)[], 10
[10]
retunr[10]
    
2)[10], 20
[10, 20]
3)[10, 20], 10
[10, 20]
4)[10, 20], 30
[10, 20, 30],
    5)[10, 20, 30], 25
[10, 20, 30, 25],
    6)[10, 20, 30, 25], 20
[10, 20, 30, 25],
    7)[10, 20, 30, 25], 10
    [10, 20, 30, 25],     
    */    
        