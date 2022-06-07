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