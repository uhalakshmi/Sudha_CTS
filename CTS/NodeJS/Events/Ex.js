var events = require('events');

var emiter = new events.EventEmitter();

function hiHandler() {
    console.log("this is hi handler");
}

function helloHandler() {
    console.log("this is hello handler");
}

function whatHandler() {
    console.log("this is what handler");
}

function whenHandler() {
    console.log("this is When handler");
}

emiter.on("hi", hiHandler);

emiter.on("hello", helloHandler);

emiter.on("what", whatHandler);

emiter.on("when", whenHandler);

emiter.emit("what");
// emiter.emit("when");
emiter.emit("hi");
// emiter.emit("hello");


