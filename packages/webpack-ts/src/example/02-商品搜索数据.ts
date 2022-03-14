// const products = require("../data/03-商品搜索数据.json");

// const result: ResponseFrontProducts[] = products;

// interface ResponseFrontProductsGoods {
//   id: string;
//   productStyleId: string;
//   code: string;
//   barCode: string;
//   name: string;
//   frontName: string;
//   frontNameEn: string;
//   weight: string;
//   subsiteId: string;
//   merchantId: string;
//   stock: string;
//   stockTip: null;
//   salesPrice: string;
//   pointPrice: string;
//   marketPrice: string;
//   saleCount: string;
//   rewardPoints: string;
//   isDefault: boolean;
//   isExplosion: boolean;
//   deliveryMode: null;
//   shelfStatus: true;
//   specifications: {
//     title: string;
//     value: string;
//   }[];
// }
// interface ResponseFrontProductsDefaultGoods {
//   id:string,
//   productStyleId:string,
//   code:string,
//   barCode:string,
//   name:string,
//   frontName:null,
//   frontNameEn:null,
//   weight:number,
//   subsiteId:number,
//   merchantId:number,
//   stock:number,
//   stockTip:null,
//   salesPrice:number,
//   pointPrice:number,
//   marketPrice:number,
//   saleCount:number,
//   rewardPoints:string,
//   isDefault:boolean,
//   isExplosion:boolean,
//   deliveryMode:null,
//   shelfStatus:boolean,
// }
// interface ResponseFrontProducts {
//   page: number;
//   perPage: number;
//   result?: {
//     id: string;
//     name: string;
//     nameEn: string;
//     code: string;
//     status: string;
//     alias: string;
//     salesUnit: string;
//     description: string;
//     descriptionEn: null;
//     details: string;
//     detailsEn: null;
//     isNew: boolean;
//     mechant: {
//       id: string;
//       name: string;
//       code: string;
//     };
//     saleSubsite: {
//       id: string;
//       name: string;
//       code: string;
//     };
//     saleMerchant: {
//       id: string;
//       name: string;
//       code: string;
//     };
//     category: {
//       id: string;
//       name: string;
//       nameEn: null;
//       code: null;
//       alias: null;
//       parent: {
//         id: string;
//         name: string;
//         nameEn: string;
//         code: null;
//         alias: string;
//         parent: {
//           id: string;
//           name: string;
//           nameEn: string;
//           code: null;
//           alias: string;
//           parent: null;
//         };
//       };
//     };
//     brand: {
//       id: string;
//       code: null;
//       name: string;
//     };
//     pictures: {
//       id: string;
//       name: string;
//       url: string;
//       extension: string;
//       thumbnailUrl: string[];
//     }[];
//     specifications: {
//       title: string;
//       defaultValue: null;
//       attributeOptions: {
//         optionId: string;
//         optionValue: string;
//         sort: string;
//       }[];
//     }[];
//     params: null;
//     goods: Record<string, ResponseFrontProductsGoods>[];
//     defaultGoods: Record<string, ResponseFrontProductsDefaultGoods>;
//   }[];
//   totalNum: number;
//   totalPage: number;
// }


let mobileDetails:string="&lt;img src=&quot;https://comall-magic-test.oss-cn-beijing.aliyuncs.com/assets/upload/miao/productdetail/8bf818b728e15713d35cf4a050409a26.png&quot; title=&quot;8bf818b728e15713d35cf4a050409a26.png&quot;/&gt;"

// mobileDetails = mobileDetails.match(/src=&quot;(\S*)&quot;/)[1];
// console.log(mobileDetails);

let prices:string="¥3000+"
prices=prices.match(/^¥(\S*)/)[1]
console.log(prices);

