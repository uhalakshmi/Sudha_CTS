var ar = [10, 20, 30, 40,];

console.log(ar);

var totals = ar.reduce((tot, ele) => { return tot + ele }, 0)

console.log(totals);
/*
(tot, ele)
1 = (0, 10)=> 10
2 = (10, 20)=> 10 + 20 => 30
3 = (30, 30)=> 30 + 30 => 60
4 = (60, 40)=> 60 + 40 => 100
*/