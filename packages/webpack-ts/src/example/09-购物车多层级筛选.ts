import every from 'lodash/every';
const carts = [
  {
    cartId: '4#2001_miao',
    cartName: '北京渔阳置业大厦店',
    format: 'SUPERMARKET',
    hash: '',
    baskets: [
      {
        id: '2001',
        merchant: { name: 'LV专卖店' },
        basketItems: [
          {
            id: '5',
            quantity: 15,
            addTime: 1622514595779,
            executePrice: 7400,
            executePointPrice: 0,
            afterFoldingPrice: 0,
            dealAmount: 111000,
            dealPointAmount: 0,
            isSelected: false,
            isInvalid: false,
            invalidMessage: '',
            thumbUrl:
              'https://comall-magic-dev.oss-cn-beijing.aliyuncs.com/assets/upload/miao/product/7d9d98d582eac0ae7460b753254cad96_300x300.png',
            goods: {
              id: '38067',
              merchant: { code: '', id: '', name: '' },
              stock: 77,
              salesPrice: '1',
              productStyleId: '30023',
              specifications: [{ title: '尺寸', value: '34' }],
              marketPrice: '1',
              salesCount: 0,
              isDefault: false,
              name: 'LV 路易威登 CHERIE露跟高跟鞋 1A8UMN',
              subsiteId: '4'
            }
          },
          {
            id: '6',
            quantity: 7,
            addTime: 1622597888356,
            executePrice: 8200,
            executePointPrice: 0,
            afterFoldingPrice: 0,
            dealAmount: 57400,
            dealPointAmount: 0,
            isSelected: true,
            isInvalid: false,
            invalidMessage: '',
            thumbUrl:
              'https://comall-magic-dev.oss-cn-beijing.aliyuncs.com/assets/upload/miao/product/5203ee22c056a21ef4133ae7b9d8053a_300x300.png',
            goods: {
              id: '40084',
              merchant: { code: '', id: '', name: '' },
              stock: 55,
              salesPrice: '1',
              productStyleId: '32042',
              specifications: [{ title: '尺寸', value: '34' }],
              marketPrice: '1',
              salesCount: 0,
              isDefault: false,
              name: 'LV 路易威登 URBAN TWIST 高跟鞋 1A7RZY',
              subsiteId: '4'
            }
          }
        ]
      }
    ],
    subsite: { id: 2001, subsiteName: '北京渔阳置业大厦店' }
  }
];





function flatten(arr) {
  let reuslt = '';
  arr.forEach((item) => {
    reuslt += item;
  });
  return reuslt;
}
let params = { cartId: '', basketId: '', itemId: '' };
carts.forEach((item) => {
  (params.cartId +=
    every(item.baskets, (basket) => every(basket.basketItems, 'isSelected')) &&
    item.cartId
      ? ''
      : ''),
    (params.basketId += item.baskets
      .map((basket) => {
        return every(basket.basketItems, 'isSelected') && basket.id;
      })
      .filter((item) => item)
      .join(',')),
    (params.itemId += flatten(
      item.baskets.map((basket) => {
        return basket.basketItems
          .map((basketItems) => {
            return basketItems.isSelected && basketItems.id;
          })
          .filter((item) => item)
          .join(',');
      })
    ));
});

console.log(params);

// console.log(
//   carts.forEach((element) => {
//     element.baskets.forEach((basket) => {
//         basket.basketItems.filter((item) => {
//         return item.isSelecte;
//       });
//     });
//   })
// );
// console.log(
//   carts.filter((baskets) => {
//       baskets.filter(basket=>{
//         every(baskets.basketItems) && baskets
//       })
//     // return every(baskets.basketItems,) && baskets

//   })
// );

// console.log(every(carts[0].baskets[0].basketItems, 'isSelected'));
