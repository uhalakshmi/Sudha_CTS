/*
2! = 2 * 1
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1
5! = 5*4*3*2*1
*/


var n = 5;

function foctorial (no){
    if (no == 0)
        return 1;
    else
        return no * foctorial(no - 1);
}

console.log("5! ", foctorial(5));
console.log("6! ", foctorial(6));
console.log("7! ", foctorial(7));
console.log("4! ", foctorial(4));

/*
return 4 * foctorial(3)
            return 3 * foctorial(2)
                        return 2 * foctorial(1) 
                                    return 1 * foctorial(0)
                                            return 1
*/                                            