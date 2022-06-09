type SomethingComplex = {
    foo: number,
    bar: string,
}

function takeSomethingComplex(arg: SomethingComplex): void{
    console.log(arg)
}
function getBar(): string {
    return 'some bar';
}

const fail_1 = {
    foo: 123,
    bar: getBar(),
}
takeSomethingComplex(fail_1)

type Id<T extends string> = {
    type: T,
    value: string,
}

type FooId = Id<'foo'>
type BarId = Id<'bar'>

const createFoo = (value: string): FooId => ({type: 'foo', value});
const createBar = (value: string): BarId => ({type: 'bar', value});

let foo = createFoo('sample')
let bar = createBar('sample')

// foo = bar;
foo = foo;
console.log(foo)