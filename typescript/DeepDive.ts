// import * as deepEqual from 'deep-equal';


// console.log(5 == '5')
// console.log(5 === '5')
// console.log(deepEqual({a: 123}, {a: 123}))
type IdDisplay = {
    id: String,
    display: String
}
const list: IdDisplay[] = [
    {
        id: 'foo',
        display: 'Foo Select',
    },
    {
        id: 'bar',
        display: 'Bar Select',
    },
]

const fooIndex = list.map(i => i.id).indexOf('foo');
// console.log(fooIndex);

// var foo = {baz: ""}
// var bar = foo
// foo['baz'] = "123";

// var foo = {};
// var bar = foo;
// var baz = {};
// console.log(foo === bar);
// console.log(foo === baz);

// console.log(undefined == undefined)
// console.log(null == undefined)

// console.log(0 == undefined)
// console.log('' == undefined)
// console.log(false == undefined)
function func(arg: string | null | undefined){
    if (arg != null){
        console.log(`${arg} is string`)
    }
}
// func('string')
var someglobal = 'global'
if (typeof someglobal !== 'undefined'){
    // console.log(someglobal)
}
function toInt(str: string){
    return str ? parseInt(str) : undefined;
}
function toInt_1(str: string): {valid: boolean, int?:number}{
    const int = parseInt(str);
    if (isNaN(int)){
        return {valid: false};
    } else {
        return {valid: true, int}
    }
}
// console.log(toInt_1('1234.4'))
var j = JSON.stringify({willStay: null, willBeGone: undefined});
console.log(j)

function func_1() {
    console.log(this)
}
func_1()

class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(point: Point){
        return new Point(this.x + point.x, this.y + point.y);
    }
}
var p1 = new Point(0, 10)
var p2 = new Point(10, 20)
var p3 = p1.add(p2);
console.log(p3)

class Point3D extends Point {
    z: number;
    constructor(x: number, y: number, z: number){
        super(x, y);
        this.z = z
    }
    add(point: Point3D){
        var point2D = super.add(point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}

class Something {
    static instances = 0;
    constructor() {
        Something.instances++;
    }
}
var s1 = new Something()
var s2 = new Something()
console.log(Something.instances);

abstract class FooCommand{
    abstract execute(): string;
}

class BarCommand extends FooCommand{
    execute(): string {
        return 'command is done !!'
    }
}
const barCommand = new BarCommand();
console.log(barCommand.execute())

class Foo{
    constructor(public x: number){

    }
}
var inc = (x: any) => x + 1;
console.log(inc(1))

class Person{
    constructor(public age: number){}
    growOld = () => {
        this.age++;
    }
}
var person = new Person(1)
// setTimeout(person.growOld, 1000)
// setTimeout(function() {console.log(person.age); }, 2000)

function iTakeItall(first: string, second: string, ...allOthers: string[]){
    console.log(allOthers)
}
iTakeItall('aaa', 'bbb', 'ccc', 'ddd')

// var foo = 123;
// if (true){
//     var foo = 456;
// }
let foo = 123;
if (true){
    let foo = 456;
}
console.log(foo)
var fooo = '123';
if (true){
    let fooo = 123;
}

var funca = [];
for (let i = 0; i < 3; i++){
    funca.push(function(){
        console.log(i)
    })
}
for (var n = 0; n < 3; n++){
    funca[n]();
}

var funca_1 = [];
for (var i = 0; i < 3; i++){
    (function(){
        var local = i;
        funca_1.push(function(){
            console.log(local);
        })
    })();
}
for (var n = 0; n < 3; n++){
    funca_1[n]();
}

const foo_1 = {bar: 123}
foo_1.bar = 456;
console.log(foo_1)

var rect = {x: 0, y: 10, width: 15, height: 20};
var {x, y, width, height} = rect
console.log(x, y, width, height)
rect.x = 10;
({x, y, width, height} = rect);
console.log(x, y, width, height)

const obj = {"some property": "some value"}

const {"some property": someProperty} = obj
console.log(someProperty === "some value")

var {w, x, ...remaining} = {w: 1, x: 2, y: 3, z: 4}
console.log(w, x, remaining)

function goto(point2D: {x: number, y: number}){
    console.log('goto')
}
const point3D = {x: 1, y: 2, z: 3}
const {z, ...point2D} = point3D
console.log(z, point2D)

var a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b)
var [x, y, ...zz] = [1, 2, 3, 4]
console.log(x, y, zz)

var someArray = [9, 2, 5]
for (var item in someArray){
    console.log(someArray[item])
}
for (var value of someArray){
    console.log(value)
}
// var hello = "is it me you're looking for?"
// for (var char of hello){
//     console.log(char)
// }
class Component {
    constructor(public name: string){}
}

// interface IteratorResult<T>{
//     done: boolean;
//     value: T;
// }

// class Frame implements Iterator<Component>{
//     private pointer = 0;
//     constructor(public name: string, public components: Component[]){}

//     public next(): IteratorResult<Component>{
//         if (this.pointer < this.components.length){
//             return {
//                 done: false,
//                 value: this.components[this.pointer++]
//             }
//         } else {
//             return {
//                 done: true,
//             }
//         }
//     }
// }

var say = "手の中にある一羽 > ヤブの中の二羽";
var html = htmlEscape `<div> 私はこのように言いたい : ${say}</div>`;

function htmlEscape(literals: TemplateStringsArray, ...placeholders: string[]){
    console.log(literals, placeholders)
    let result = "";
    for (let i = 0; i < placeholders.length; i++){
        result += literals[i];
        result += placeholders[i]
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
    }
    result += literals[literals.length - 1];
    return result;
}
console.log(html)

// const promise = new Promise((resolve, reject) => {
//     resolve(123)
// })
// promise.then((res) => {
//     console.log('I get called', res === 123)
// })
// promise.catch((err) => {

// })

function* generator() {
    var bar = yield 'foo';
    console.log(bar);
}

const iter = generator()
const foo_2 = iter.next()
console.log(foo_2.value)
const nextThing = iter.next('bar')