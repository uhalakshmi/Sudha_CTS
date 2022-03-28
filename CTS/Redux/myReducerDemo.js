

var counter = 10;

function myReducer(action){
    if (action == 'increment')
        counter = counter + 1;
    else if (action === 'decrement') {
        counter = counter - 1;
    }
}
myReducer('increment');
console.log("counter: ", counter);
myReducer('increment');
console.log("counter: ", counter);