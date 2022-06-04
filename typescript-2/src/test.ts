import * as fs from 'fs';

var num: number = 123;
function identity(num: number): number{
    return num
}

var boolArray: boolean[]
boolArray = [true, false]
// boolArray[0] = 'false'

interface Name{
    first: string;
    second: string;
}

var name: Name;
name = {
    first: 'John',
    second: 'Doe'
}
// name = {
//     first: 'John'
// }

var name: {
    first: string;
    second: string;
}

function log(message: any): void{
    console.log(message)
}

function reverse<T>(items: T[]): T[]{
    var toreturn = [];
    for (let i = items.length - 1; i >= 0; i--){
        toreturn.push(items[i])
    }
    return toreturn;
}
var sample = [1, 2, 4]
var reversed = reverse(sample)
// console.log(reversed)

function formatCommandline(command: string[]|string): string{
    var line = '';
    if (typeof command === 'string'){
        line = command.trim()
    } else {
        line = command.join(' ').trim();
    }
    return line
}
var c = formatCommandline('tttty')
// console.log(c)

function extend<T, U>(first: T, second: U): T & U {
    return {...first, ...second}
}
const x = extend({a: 'hello'}, {b: 43})
// console.log(x.a, x.b)

type StrOrNum = string|number

