const s5 = Symbol('name')

const info = {
    [s5]: 'lison',
    age: "18",
    sex: 'main'
}
// console.log(info)

// console.log(Object.keys(info))

// console.log(Object.getOwnPropertyNames(info))

// console.log(Object.getOwnPropertySymbols(info))

// console.log(Reflect.ownKeys(info))


// instanceof
const obj1 = {
    [Symbol.hasInstance](otherObj) {
        // console.log(otherObj)
    }
}

// console.log({a:'a1'} instanceof <any>obj1)

// Symbol.isConcatSpreadable
// 布尔值，表示当在一个对象上调用Array.prototype.concat时，这个对象的数组元素是否可展开。
// let arr=[1,2]
// console.log([].concat(arr,[3,4]))
// arr[Symbol.isConcatSpreadable]=false
// console.log([].concat(arr,[3,4]))


// Symbol.species
// 函数值，为一个构造函数。用来创建派生对象。