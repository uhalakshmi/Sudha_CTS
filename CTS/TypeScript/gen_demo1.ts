function someData(data: any): any{
    return data;
}

console.log(someData(101));
console.log(someData('Anil'));
console.log(someData(true));

function someData1<T>(data: T): T{
    return data;
}
console.log(someData1<number>(101));
console.log(someData1<string>('Anil'));
console.log(someData1<boolean>(true));

var data: any;
// data = 101;
data = 'Anil'
console.log(someData1<number>(data));
console.log(someData1<string>('Anil'));
console.log(someData1<boolean>(true));


