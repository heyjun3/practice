"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    for (var i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}
var sample = [1, 2, 4];
var reversed = reverse(sample);
// console.log(reversed)
function formatCommandline(command) {
    var line = '';
    if (typeof command === 'string') {
        line = command.trim();
    }
    else {
        line = command.join(' ').trim();
    }
    return line;
}
var c = formatCommandline('tttty');
// console.log(c)
function extend(first, second) {
    return __assign(__assign({}, first), second);
}
var x = extend({ a: 'hello' }, { b: 43 });
var foo = 123;
var bar = 'hey';
bar = foo;
// class CrayzClass implements Crazy {
//     new () {
//         return {hello: 123}
//     }
// }
// const crazy = new CrayzClass();
var CardSuit;
(function (CardSuit) {
    CardSuit[CardSuit["Clubs"] = 0] = "Clubs";
    CardSuit[CardSuit["Diamonds"] = 1] = "Diamonds";
    CardSuit[CardSuit["Hearts"] = 2] = "Hearts";
    CardSuit[CardSuit["Spades"] = 3] = "Spades";
})(CardSuit || (CardSuit = {}));
var card = CardSuit.Clubs;
card = 123;
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 0] = "Monday";
    Weekday[Weekday["Tuesday"] = 1] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 2] = "Wednesday";
    Weekday[Weekday["Thursday"] = 3] = "Thursday";
    Weekday[Weekday["Friday"] = 4] = "Friday";
    Weekday[Weekday["Saturday"] = 5] = "Saturday";
    Weekday[Weekday["Sunday"] = 6] = "Sunday";
})(Weekday || (Weekday = {}));
(function (Weekday) {
    function isBusinessDay(day) {
        switch (day) {
            case Weekday.Saturday:
            case Weekday.Sunday:
                return false;
            default:
                return true;
        }
    }
    Weekday.isBusinessDay = isBusinessDay;
})(Weekday || (Weekday = {}));
var mon = Weekday.Monday;
var sun = Weekday.Sunday;
// console.log(Weekday.isBusinessDay(mon))
// console.log(Weekday.isBusinessDay(sun))
var foo = 123;
var bar = foo.toString();
window.helloWorld = function () { return console.log('hello world'); };
window.helloWorld();
