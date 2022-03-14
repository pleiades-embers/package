const getFullName = ({ firstName, lastName }:NameInfo):string => {
    return `${firstName} ${lastName}`
}

interface NameInfo {
    firstName: string,
    lastName: string
}

// 可选属性 interface

interface Vegetable{
    color?:string,
    readonly type:string
}

const getVegetables=({color,type}:Vegetable)=>{
    return `A ${color?(color+' '):''}${type}`
}

// console.log(getVegetables({
//     type:'orange',
//     color:'red'
// }))


// 混合 interface

interface Counter{
    ():void,
    count:number
}

const getCounter =():Counter=>{
    const c=()=>{c.count++}
    c.count=0
    return c
}

const counter:Counter=getCounter()
// counter()
// console.log(counter.count)
// counter()
// console.log(counter.count)
// counter()
// console.log(counter.count)
