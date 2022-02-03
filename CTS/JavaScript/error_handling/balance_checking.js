

var bal = 15000;

var wdraw = 2000;
try {
    if (bal - wdraw < 0) {
        throw new Error("Sorry, Your operation is not completed, due to insufficiant funds");
    } else {
        bal = bal - wdraw;
        console.log("Please collect your money, ie: ", wdraw);
        console.log("Your available balance is : ", bal);
    }
    
} catch (error) {
    // console.log(error);
    console.log(error.message);
    console.log("Your available balance is : ", bal);
}


console.log("Have a nice day.");
console.log("Thank you , visit again.");