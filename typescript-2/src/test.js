"use strict";
exports.__esModule = true;
var num = 123;
function identity(num) {
    return num;
}
var boolArray;
boolArray = [true, false];
var name;
name = {
    first: 'John',
    second: 'Doe'
};
// name = {
//     first: 'John'
// }
var name;
function log(message) {
    console.log(message);
}
function reverse(items) {
    var toreturn = [];
    for (var i = items.length - 1; i >= 0; i++) {
        toreturn.push(items[i]);
    }
    return toreturn;
}
var sample = [1, 2, 4];
var reversed = reverse(sample);
console.log(reversed);
console.log('hello world');
