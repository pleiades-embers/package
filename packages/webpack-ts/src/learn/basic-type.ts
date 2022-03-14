// 布尔类型
let bool: boolean = false

// 数值
let num: number = 123

//  undefined null 是所有类型的子类型
let u:undefined=undefined
let n:null=null
let num2: number = undefined



// 元祖
let tuple: [string, number, boolean]
tuple = ['A', 1, false]

// 枚举
enum Roles {
    SUPER_ADMIN,
    ADMIN,
    USER
}
// console.log(Roles.ADMIN)


// void 类型
const consoleText = (text: String): void => {
    console.log(text)
}
let v: void
v = undefined
v = null
// consoleText('abc')


// never 类型
const errorFunc = (message: string): never => {
    throw new Error(message)
}

// const infiniteFunc = () => {
//     while (true) {

//     }
// }

// 类型断言
const getLength = (target: string | number): number => {
    if ((target as string).length || (target as string).length === 0) {
        return (target as string).length
    } else {
        target.toString().length
    }
}


//对象后任意属性
let object:{name:string,[propName:string]:any}

