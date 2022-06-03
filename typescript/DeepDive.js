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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;
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
    var foo_3 = 456;
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
var foo_1 = { bar: 123 };
foo_1.bar = 456;
console.log(foo_1);
var rect = { x: 0, y: 10, width: 15, height: 20 };
var x = rect.x, y = rect.y, width = rect.width, height = rect.height;
console.log(x, y, width, height);
rect.x = 10;
(x = rect.x, y = rect.y, width = rect.width, height = rect.height);
console.log(x, y, width, height);
var obj = { "some property": "some value" };
var someProperty = obj["some property"];
console.log(someProperty === "some value");
var _b = { w: 1, x: 2, y: 3, z: 4 }, w = _b.w, x = _b.x, remaining = __rest(_b, ["w", "x"]);
console.log(w, x, remaining);
function goto(point2D) {
    console.log('goto');
}
var point3D = { x: 1, y: 2, z: 3 };
var z = point3D.z, point2D = __rest(point3D, ["z"]);
console.log(z, point2D);
var a = 1, b = 2;
_a = [b, a], a = _a[0], b = _a[1];
console.log(a, b);
var _c = [1, 2, 3, 4], x = _c[0], y = _c[1], zz = _c.slice(2);
console.log(x, y, zz);
var someArray = [9, 2, 5];
for (var item in someArray) {
    console.log(someArray[item]);
}
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var value = someArray_1[_i];
    console.log(value);
}
// var hello = "is it me you're looking for?"
// for (var char of hello){
//     console.log(char)
// }
var Component = /** @class */ (function () {
    function Component(name) {
        this.name = name;
    }
    return Component;
}());
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
var html = htmlEscape(__makeTemplateObject(["<div> \u79C1\u306F\u3053\u306E\u3088\u3046\u306B\u8A00\u3044\u305F\u3044 : ", "</div>"], ["<div> \u79C1\u306F\u3053\u306E\u3088\u3046\u306B\u8A00\u3044\u305F\u3044 : ", "</div>"]), say);
function htmlEscape(literals) {
    var placeholders = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        placeholders[_i - 1] = arguments[_i];
    }
    console.log(literals, placeholders);
    var result = "";
    for (var i_2 = 0; i_2 < placeholders.length; i_2++) {
        result += literals[i_2];
        result += placeholders[i_2]
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
    result += literals[literals.length - 1];
    return result;
}
console.log(html);
// const promise = new Promise((resolve, reject) => {
//     resolve(123)
// })
// promise.then((res) => {
//     console.log('I get called', res === 123)
// })
// promise.catch((err) => {
// })
function generator() {
    var bar;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 'foo'];
            case 1:
                bar = _a.sent();
                console.log(bar);
                return [2 /*return*/];
        }
    });
}
var iter = generator();
var foo_2 = iter.next();
console.log(foo_2.value);
var nextThing = iter.next('bar');
