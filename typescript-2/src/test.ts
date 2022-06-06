import * as fs from 'fs';
import { formatWithOptions } from 'util';

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

var foo = 123;
var bar = 'hey';
bar = foo as any;
// console.log(bar)

declare var process: any;
// process.exit();

declare var myPoint: {x: number; y: number};

interface Point {
    x: number; y: number;
}

interface Point {
    z: number;
}

interface Crazy{
    new():{
        hello: number
    };
}

// class CrayzClass implements Crazy {
//     new () {
//         return {hello: 123}
//     }
// }
// const crazy = new CrayzClass();

enum CardSuit {
    Clubs,
    Diamonds,
    Hearts,
    Spades,
}
var card = CardSuit.Clubs;
card = 123

enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

namespace Weekday {
    export function isBusinessDay(day: Weekday){
        switch (day){
            case Weekday.Saturday:
            case Weekday.Sunday:
                return false;
            default:
                return true;
        }
    }
}

const mon = Weekday.Monday;
const sun = Weekday.Sunday;
// console.log(Weekday.isBusinessDay(mon))
// console.log(Weekday.isBusinessDay(sun))

var foo = 123;
var bar = foo.toString();
// console.log(bar)

interface Window {
    helloWorld(): void;
}
declare var Math: Math;
// console.log(Math)

interface ReturnString{
    (): string
}
declare const foobar: ReturnString;

interface CallMeWithNewToGetString {
    new(): string
}

declare const Foo: CallMeWithNewToGetString;

interface MyInterface {
    name: string
    displayName(): void;
}

class MyClass implements MyInterface {
    name: string
    constructor(name: string) {
       this.name = name
    }
    displayName (): void {
        console.log(this.name)
    }
}
const myClass = new MyClass('Jun')
myClass.displayName()

declare var fooo: {barr?: {baz: string}};
function immediate(callback: ()=>void) {
    callback()
}

type Foo = {
    readonly bar: number;
    readonly bax: number;
}
let fooFoo: Foo = {bar: 123, bax: 456}
