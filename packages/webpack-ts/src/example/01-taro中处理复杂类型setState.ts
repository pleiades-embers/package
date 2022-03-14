// let options = [
//   {
//     name: "价格",
//     data: [
//       { name: "不限", select: false },
//       { name: "¥0-499", select: false },
//       { name: "¥500-999", select: false },
//       { name: "¥1000-1499", select: false },
//       { name: "¥1500-1999", select: true },
//       { name: "¥2000+", select: true },
//     ],
//   },
//   {
//     name: "品牌",
//     data: [
//       { name: "雅诗兰黛", select: true },
//       { name: "碧欧泉", select: true },
//       { name: "丝芙兰", select: true },
//       { name: "兰蔻", select: false },
//       { name: "SK-II", select: false },
//       { name: "娇兰", select: false },
//       { name: "资生堂", select: false },
//       { name: "雅诗兰黛", select: false },
//       { name: "碧欧泉", select: false },
//       { name: "丝芙兰", select: false },
//       { name: "兰蔻", select: false },
//       { name: "SK-II", select: false },
//       { name: "娇兰", select: false },
//       { name: "资生堂", select: false },
//     ],
//   },
// ];

// let newData = options;
/**
 * 价格  方法1
 */
// const { data = [] } = newData;

// const selectIndex = data.findIndex((item) => {
//   return item.select == true;
// });
// if (selectIndex !== -1) {
//   data[selectIndex].select = false;
// }
// data[i].select = !_item.select;

/**
 * 价格 方法2  哈希表法 未完成
 */
// function fn(i, item) {
//   let data=priceSelect(newData[0].data,i);
//   console.log(data)
// }
// fn(4, { name: "¥1500-1999", select: false });
// fn(5, { name: "¥2000+", select: false });

// function priceSelect(prices:Array<{name:string,select:boolean}>,index:number){
//   let map = new Map()
//   for (let i = 0; i< prices.length; i++) {
//     map.set(i,prices[i])
//   }
//   if(map.has(index)){
//     let obj=map.get(index)
//     obj.select=!obj.select
//     map.set(index,obj)
//   }

//   return Array.from(map)
// }


/**
 * 品牌 全选
 */
// let newData = options;
// function fn2(i, item) {
//   const { data = [] } = newData[1];
//   const dataSet=new Set(data)
//   console.log(dataSet);
//   dataSet.has(item)
//   debugger
//   // if(item.select){
//   //   newVal = [...data, item];
//   // }else{
//   //   newVal = [...data];
//   //   const index = newVal.indexOf(item);
//   //   index >= 0 && newVal.splice(index, 1);
//   // }
//   // newVal = [...new Set(newVal)] //观察者模式
//   // console.log(newVal)
// }
// fn2(4, { name: "兰蔻", select: false });
// fn2(5, { name: "SK-II", select: true });

// console.log(newData[1].data);
