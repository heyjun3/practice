function foo(){
    console.log(this)
}
// foo()
let bar = {
    foo
}
// bar.foo();

function outerFunction(arg) {
    var variableInOuterFunctin = arg;

    return function() {
        console.log(variableInOuterFunctin);
    }
}
var innerFunction = outerFunction('Hello closure')
// innerFunction();
function createCounter() {
    let val = 0;
    return {
        increment() { val++ },
        getVal() { return val },
    }
}
let counter = createCounter()
counter.increment()
// console.log(counter.getVal())
counter.increment()
// console.log(counter.getVal())

// console.log(.1 + .2);

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)

// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 10));

import Big from 'big.js';
export const fooo = new Big('111.11111111111111111111111111');
export const barr = fooo.plus(new Big('0.000000000000000000001'));
const x = Number(barr.toString());

// console.log(Math.sqrt(-1));
// console.log(NaN === NaN)
// console.log(Number.isNaN(NaN))
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

if (123) {
    console.log('Any number other than 0 is truthy')
}
