"use strict";
// console.log("lol")
// console.log("okkkk");
// let x: number = 44;
// let y = 55;
// let z = ['apple', 'banana', 'kumquat'];
// for (let el of z) {
//   console.log(el);
// }
console.log("time to count");
let numCalled = 0;
function countCalls() {
    numCalled++;
    return numCalled;
}
countCalls();
countCalls();
console.log(countCalls);
let handle = countCalls;
console.log(handle);
//handle.call(this);
console.log(numCalled); // 2
handle(); // calling 
console.log(numCalled); // 3
if (countCalls === handle) {
    console.log('both handles are equal');
}
else {
    console.log('both handles are NOT equal');
}
function getNewCounter(msg) {
    console.log("initializing counter to zero");
    let counter = 0;
    function newFunction() {
        counter++;
        console.log(msg + " incremented counter, and counter is: " + counter);
    }
    return newFunction;
}
let func1 = getNewCounter("from func1");
let func2 = getNewCounter("from func2");
console.log(func1);
console.log(func2);
if (func1 === func2) {
    console.log('both handles are equal');
}
else {
    console.log('both handles are NOT equal');
}
func1();
func1();
func2();
