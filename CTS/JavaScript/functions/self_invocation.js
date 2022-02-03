(function () {
    console.log("hello world");
})();


(function (a, b) {
    console.log(a, b);
})(10, 20);

var res = 
(function (a, b) {
        console.log(a, b);
        return a + b;
    })(10, 20);

    console.log(res);