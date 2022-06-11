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

const callable = new class {
    count = 0;
    called = () => {
        this.count++;
        console.log(`Called : ${this.count}`)
    }
};

callable.called()
callable.called()

const func: Function = (...args: number[]) => {
    console.log(args)
}

func('1')

let add = (x: number) => (y: number) => x + y;

let add123 = add(123)
console.log(add123(1))

let foos = {
    bar: 456
}
foos['bar'] = 123
foos.bar = 1234
console.log(foos)

let foody = {} as any;
foody.bar = 12344
console.log(foody)

interface Food {
    bar: number,
}

let food = {} as Food
food.bar = 123333
console.log(food)

function foosfoo() {
    let property: number = 0;

    function addProperty(): number{
        let num = property + 1;
        return num
    }
    return addProperty
}

const foosfo = foosfoo()
let varialbe = foosfo()
console.log(varialbe)
class Foo{}
export default Foo