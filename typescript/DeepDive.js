// import * as deepEqual from 'deep-equal';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var list = [
    {
        id: 'foo',
        display: 'Foo Select'
    },
    {
        id: 'bar',
        display: 'Bar Select'
    },
];
var fooIndex = list.map(function (i) { return i.id; }).indexOf('foo');
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
function func(arg) {
    if (arg != null) {
        console.log("".concat(arg, " is string"));
    }
}
// func('string')
var someglobal = 'global';
if (typeof someglobal !== 'undefined') {
    // console.log(someglobal)
}
function toInt(str) {
    return str ? parseInt(str) : undefined;
}
function toInt_1(str) {
    var int = parseInt(str);
    if (isNaN(int)) {
        return { valid: false };
    }
    else {
        return { valid: true, int: int };
    }
}
// console.log(toInt_1('1234.4'))
var j = JSON.stringify({ willStay: null, willBeGone: undefined });
console.log(j);
function func_1() {
    console.log(this);
}
func_1();
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;
}());
var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2);
console.log(p3);
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Point3D.prototype.add = function (point) {
        var point2D = _super.prototype.add.call(this, point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    };
    return Point3D;
}(Point));
var Something = /** @class */ (function () {
    function Something() {
        Something.instances++;
    }
    Something.instances = 0;
    return Something;
}());
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances);
var FooCommand = /** @class */ (function () {
    function FooCommand() {
    }
    return FooCommand;
}());
var BarCommand = /** @class */ (function (_super) {
    __extends(BarCommand, _super);
    function BarCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarCommand.prototype.execute = function () {
        return 'command is done !!';
    };
    return BarCommand;
}(FooCommand));
var barCommand = new BarCommand();
console.log(barCommand.execute());
var Foo = /** @class */ (function () {
    function Foo(x) {
        this.x = x;
    }
    return Foo;
}());
var inc = function (x) { return x + 1; };
console.log(inc(1));
var Person = /** @class */ (function () {
    function Person(age) {
        var _this = this;
        this.age = age;
        this.growOld = function () {
            _this.age++;
        };
    }
    return Person;
}());
var person = new Person(1);
// setTimeout(person.growOld, 1000)
// setTimeout(function() {console.log(person.age); }, 2000)
function iTakeItall(first, second) {
    var allOthers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        allOthers[_i - 2] = arguments[_i];
    }
    console.log(allOthers);
}
iTakeItall('aaa', 'bbb', 'ccc', 'ddd');
// var foo = 123;
// if (true){
//     var foo = 456;
// }
var foo = 123;
if (true) {
    var foo_1 = 456;
}
console.log(foo);
var fooo = '123';
if (true) {
    var fooo_1 = 123;
}
var funca = [];
var _loop_1 = function (i_1) {
    funca.push(function () {
        console.log(i_1);
    });
};
for (var i_1 = 0; i_1 < 3; i_1++) {
    _loop_1(i_1);
}
for (var n = 0; n < 3; n++) {
    funca[n]();
}
var funca_1 = [];
for (var i = 0; i < 3; i++) {
    (function () {
        var local = i;
        funca_1.push(function () {
            console.log(local);
        });
    })();
}
for (var n = 0; n < 3; n++) {
    funca_1[n]();
}
