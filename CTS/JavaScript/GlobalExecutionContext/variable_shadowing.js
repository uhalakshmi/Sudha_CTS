

var a = 10;
console.log("a=", a);
{
    let a = 20;
    console.log("a=", a);
    {
        let a = 30;
        console.log("a=", a);
        {
            let a = 40;
            console.log("a=", a);
        }
        console.log("a=", a);
    }
    console.log("a=", a);
}
console.log("a=", a);