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

var foo = {};
var bar = foo;
var baz = {};
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