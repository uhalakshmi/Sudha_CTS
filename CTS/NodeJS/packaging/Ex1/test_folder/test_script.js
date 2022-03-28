const murali_arith = import('murali_arith');
console.log(murali_arith);
murali_arith.then(arith => {
    console.log(arith);
    arith = arith.default;
    console.log(arith.add(10, 2));
    console.log(arith.sub(10, 2));
    console.log(arith.mul(10, 2));
    console.log(arith.div(10, 2));
})
    .catch(err => {
    console.log(err);
})
// console.log(murali_arith.add(10, 2));