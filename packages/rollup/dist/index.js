'use strict';

require('reflect-metadata');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

// export { TaroNode } from './dom/node'
function Prop() {
    return function (target, key) {
        var type = Reflect.getMetadata("design:type", target, key);
        console.log((key + " type: " + (type.name)));
        // other...
    };
}
var SomeClass = function SomeClass () {};
__decorate([
    Prop(),
    __metadata("design:type", String)
], SomeClass.prototype, "Aprop", void 0);
__decorate([
    Prop(),
    __metadata("design:type", Number)
], SomeClass.prototype, "Cprop", void 0);
var A = /*@__PURE__*/(function () {
    function A () {}

    A.prototype.hello = function hello () { };

    return A;
}());
__decorate([
    Reflect.metadata('name', 'hello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], A.prototype, "hello", null);
A = __decorate([
    Reflect.metadata('name', 'A')
], A);
var objs = [A, new A, A.prototype];
var res = objs.map(function (obj) { return [
    Reflect.getMetadata('name', obj),
    Reflect.getMetadata('name', obj, 'hello'),
    Reflect.getOwnMetadata('name', obj),
    Reflect.getOwnMetadata('name', obj, 'hello')
]; });
console.log(res);
//# sourceMappingURL=index.js.map
