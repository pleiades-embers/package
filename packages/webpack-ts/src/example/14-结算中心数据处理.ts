// let consignee: any = {
//   id: 2,
//   name: "张三",
//   mobile: "13012341234",
//   address: "渔阳置业大厦",
//   regions: [
//     {
//       id: 110105008,
//       name: "安贞街道",
//     },
//     {
//       id: 110000,
//       name: "北京",
//     },
//     {
//       id: 110105,
//       name: "朝阳区",
//     },
//   ],
//   selected: false,
//   valid: true,
//   tip: "",
//   default: false,
//   regionId: 110105008,
// };

// var regions = consignee.regions.sort(({ id: idA }, { id: idB }) => idA - idB);

// console.log(regions);

let carts = [
    {
        "merchantCheckouts": [
            {
                "merchantId": 2001,
                "remark": "",
                "deliveryModes": [
                    {
                        "id": 1004,
                        "name": "同城配",
                        "selected": false,
                        "address": "",
                        "time": "",
                        "tip": "",
                        "valid": false,
                        "selectDeliveryTime": false,
                        "aliasName": "商家配送"
                    },
                    {
                        "id": 1001,
                        "name": "快递",
                        "selected": true,
                        "address": "",
                        "time": "",
                        "tip": "",
                        "valid": true,
                        "selectDeliveryTime": false,
                        "aliasName": "商家配送"
                    },
                    {
                        "id": 1002,
                        "name": "自提",
                        "selected": false,
                        "address": "广场3层服务台",
                        "time": "早9：00- 晚18：00",
                        "tip": "",
                        "valid": true,
                        "selectDeliveryTime": false,
                        "aliasName": "门店自提"
                    }
                ],
                "merchantCoupons": null
            }
        ],
        "cart": {
            "cartName": "北京渔阳置业大厦店",
            "format": "SUPERMARKET",
            "subsiteId": 4,
            "baskets": [
                {
                    "id": 2001,
                    "rewards": [],
                    "cartTimeLimits": [],
                    "lastAddTime": 1628244898747,
                    "merchantName": "LV专卖店",
                    "basketItems": [
                        {
                            "id": 100,
                            "goods": {
                                "weight": 150,
                                "point": 0,
                                "goodsTags": [],
                                "type": "NORMAL",
                                "displayUnit": "PIECE",
                                "stepValue": 1,
                                "virtualCategoryIds": [],
                                "id": 44071,
                                "name": "LV 路易威登 全幅玩偶圆领衫 1A8P4T",
                                "status": "ENABLE",
                                "brandId": 22007,
                                "categoryId": 14027,
                                "productId": 36013,
                                "salesPrice": 63000,
                                "marketPrice": 70000,
                                "shelfStatus": "SHELF",
                                "availableStock": 56,
                                "thumbUrl": "https://comall-magic-dev.oss-cn-beijing.aliyuncs.com/assets/upload/miao/product/7cbdfed7c182b68a796075061087a6fe_500x500.png",
                                "productStyle": {
                                    "id": 36029,
                                    "code": "1A8P4T000",
                                    "barCode": "",
                                    "styleName": "尺码:XL ",
                                    "styleNameEn": ": "
                                },
                                "costPrice": 50000,
                                "subsiteId": null,
                                "merchantId": null,
                                "productCode": "",
                                "salesUnit": 1
                            },
                            "rewards": [],
                            "status": "VALID",
                            "select": true,
                            "distributionMemberId": null,
                            "invalidQuantityWithPresents": 0,
                            "invalidMessage": "",
                            "quantity": 1,
                            "validQuantity": 1,
                            "invalidQuantity": 0,
                            "quantityWithPresents": 1,
                            "validQuantityWithPresents": 1,
                            "weight": 150,
                            "validWeight": 150,
                            "weightWithPresents": 150,
                            "validWeightWithPresents": 150,
                            "amount": 63000,
                            "validAmount": 63000,
                            "pointAmount": 0,
                            "validPointAmount": 0,
                            "couponDiscountAmount": 0,
                            "totalCouponDiscountAmount": 0,
                            "dealAmount": 63000,
                            "afterFoldingAmount": 63000,
                            "executePrice": 63000,
                            "amountWithoutPresents": 63000,
                            "discountAmount": 0,
                            "executePointPrice": 0,
                            "dealPointAmount": 0,
                            "addTime": 1628244898747
                        },
                        {
                            "id": 97,
                            "goods": {
                                "weight": 600,
                                "point": 0,
                                "goodsTags": [],
                                "type": "NORMAL",
                                "displayUnit": "PIECE",
                                "stepValue": 1,
                                "virtualCategoryIds": [],
                                "id": 40072,
                                "name": "LV 路易威登 SOFIA 凉拖 1A8NW1",
                                "status": "ENABLE",
                                "brandId": 22007,
                                "categoryId": 14030,
                                "productId": 32012,
                                "salesPrice": 8900,
                                "marketPrice": 9900,
                                "shelfStatus": "SHELF",
                                "availableStock": 51,
                                "thumbUrl": "https://comall-magic-dev.oss-cn-beijing.aliyuncs.com/assets/upload/miao/product/0c9374bdeeb341fb6f5601f18f91ca5d_500x500.png",
                                "productStyle": {
                                    "id": 32030,
                                    "code": "1A8NW1002",
                                    "barCode": "",
                                    "styleName": "尺寸:36 ",
                                    "styleNameEn": ": "
                                },
                                "costPrice": 5000,
                                "subsiteId": null,
                                "merchantId": null,
                                "productCode": "",
                                "salesUnit": 1
                            },
                            "rewards": [],
                            "status": "VALID",
                            "select": false,
                            "distributionMemberId": null,
                            "invalidQuantityWithPresents": 0,
                            "invalidMessage": "",
                            "quantity": 0,
                            "validQuantity": 7,
                            "invalidQuantity": 0,
                            "quantityWithPresents": 0,
                            "validQuantityWithPresents": 7,
                            "weight": 0,
                            "validWeight": 4200,
                            "weightWithPresents": 0,
                            "validWeightWithPresents": 4200,
                            "amount": 62300,
                            "validAmount": 62300,
                            "pointAmount": 0,
                            "validPointAmount": 0,
                            "couponDiscountAmount": 0,
                            "totalCouponDiscountAmount": 0,
                            "dealAmount": 0,
                            "afterFoldingAmount": 0,
                            "executePrice": 8900,
                            "amountWithoutPresents": 0,
                            "discountAmount": 0,
                            "executePointPrice": 0,
                            "dealPointAmount": 0,
                            "addTime": 1628244763334
                        },
                        {
                            "id": 96,
                            "goods": {
                                "weight": 600,
                                "point": 0,
                                "goodsTags": [],
                                "type": "NORMAL",
                                "displayUnit": "PIECE",
                                "stepValue": 1,
                                "virtualCategoryIds": [],
                                "id": 40071,
                                "name": "LV 路易威登 SOFIA 凉拖 1A8NW1",
                                "status": "ENABLE",
                                "brandId": 22007,
                                "categoryId": 14030,
                                "productId": 32012,
                                "salesPrice": 8900,
                                "marketPrice": 9900,
                                "shelfStatus": "SHELF",
                                "availableStock": 51,
                                "thumbUrl": "https://comall-magic-dev.oss-cn-beijing.aliyuncs.com/assets/upload/miao/product/0c9374bdeeb341fb6f5601f18f91ca5d_500x500.png",
                                "productStyle": {
                                    "id": 32029,
                                    "code": "1A8NW1001",
                                    "barCode": "",
                                    "styleName": "尺寸:35 ",
                                    "styleNameEn": ": "
                                },
                                "costPrice": 5000,
                                "subsiteId": null,
                                "merchantId": null,
                                "productCode": "",
                                "salesUnit": 1
                            },
                            "rewards": [],
                            "status": "VALID",
                            "select": false,
                            "distributionMemberId": null,
                            "invalidQuantityWithPresents": 0,
                            "invalidMessage": "",
                            "quantity": 0,
                            "validQuantity": 4,
                            "invalidQuantity": 0,
                            "quantityWithPresents": 0,
                            "validQuantityWithPresents": 4,
                            "weight": 0,
                            "validWeight": 2400,
                            "weightWithPresents": 0,
                            "validWeightWithPresents": 2400,
                            "amount": 35600,
                            "validAmount": 35600,
                            "pointAmount": 0,
                            "validPointAmount": 0,
                            "couponDiscountAmount": 0,
                            "totalCouponDiscountAmount": 0,
                            "dealAmount": 0,
                            "afterFoldingAmount": 0,
                            "executePrice": 8900,
                            "amountWithoutPresents": 0,
                            "discountAmount": 0,
                            "executePointPrice": 0,
                            "dealPointAmount": 0,
                            "addTime": 1628244763308
                        },
                        {
                            "id": 95,
                            "goods": {
                                "weight": 600,
                                "point": 0,
                                "goodsTags": [],
                                "type": "NORMAL",
                                "displayUnit": "PIECE",
                                "stepValue": 1,
                                "virtualCategoryIds": [],
                                "id": 40070,
                                "name": "LV 路易威登 SOFIA 凉拖 1A8NW1",
                                "status": "ENABLE",
                                "brandId": 22007,
                                "categoryId": 14030,
                                "productId": 32012,
                                "salesPrice": 8900,
                                "marketPrice": 9900,
                                "shelfStatus": "SHELF",
                                "availableStock": 41,
                                "thumbUrl": "https://comall-magic-dev.oss-cn-beijing.aliyuncs.com/assets/upload/miao/product/0c9374bdeeb341fb6f5601f18f91ca5d_500x500.png",
                                "productStyle": {
                                    "id": 32028,
                                    "code": "1A8NW1000",
                                    "barCode": "",
                                    "styleName": "尺寸:34 ",
                                    "styleNameEn": ": "
                                },
                                "costPrice": 5000,
                                "subsiteId": null,
                                "merchantId": null,
                                "productCode": "",
                                "salesUnit": 1
                            },
                            "rewards": [],
                            "status": "VALID",
                            "select": false,
                            "distributionMemberId": null,
                            "invalidQuantityWithPresents": 0,
                            "invalidMessage": "",
                            "quantity": 0,
                            "validQuantity": 5,
                            "invalidQuantity": 0,
                            "quantityWithPresents": 0,
                            "validQuantityWithPresents": 5,
                            "weight": 0,
                            "validWeight": 3000,
                            "weightWithPresents": 0,
                            "validWeightWithPresents": 3000,
                            "amount": 44500,
                            "validAmount": 44500,
                            "pointAmount": 0,
                            "validPointAmount": 0,
                            "couponDiscountAmount": 0,
                            "totalCouponDiscountAmount": 0,
                            "dealAmount": 0,
                            "afterFoldingAmount": 0,
                            "executePrice": 8900,
                            "amountWithoutPresents": 0,
                            "discountAmount": 0,
                            "executePointPrice": 0,
                            "dealPointAmount": 0,
                            "addTime": 1628244703727
                        },
                        {
                            "id": 94,
                            "goods": {
                                "weight": 600,
                                "point": 0,
                                "goodsTags": [],
                                "type": "NORMAL",
                                "displayUnit": "PIECE",
                                "stepValue": 1,
                                "virtualCategoryIds": [],
                                "id": 40076,
                                "name": "LV 路易威登 SOFIA 凉拖 1A8NW1",
                                "status": "ENABLE",
                                "brandId": 22007,
                                "categoryId": 14030,
                                "productId": 32012,
                                "salesPrice": 8900,
                                "marketPrice": 9900,
                                "shelfStatus": "SHELF",
                                "availableStock": 45,
                                "thumbUrl": "https://comall-magic-dev.oss-cn-beijing.aliyuncs.com/assets/upload/miao/product/0c9374bdeeb341fb6f5601f18f91ca5d_500x500.png",
                                "productStyle": {
                                    "id": 32034,
                                    "code": "1A8NW1006",
                                    "barCode": "",
                                    "styleName": "尺寸:40 ",
                                    "styleNameEn": ": "
                                },
                                "costPrice": 5000,
                                "subsiteId": null,
                                "merchantId": null,
                                "productCode": "",
                                "salesUnit": 1
                            },
                            "rewards": [],
                            "status": "VALID",
                            "select": false,
                            "distributionMemberId": null,
                            "invalidQuantityWithPresents": 0,
                            "invalidMessage": "",
                            "quantity": 0,
                            "validQuantity": 10,
                            "invalidQuantity": 0,
                            "quantityWithPresents": 0,
                            "validQuantityWithPresents": 10,
                            "weight": 0,
                            "validWeight": 6000,
                            "weightWithPresents": 0,
                            "validWeightWithPresents": 6000,
                            "amount": 89000,
                            "validAmount": 89000,
                            "pointAmount": 0,
                            "validPointAmount": 0,
                            "couponDiscountAmount": 0,
                            "totalCouponDiscountAmount": 0,
                            "dealAmount": 0,
                            "afterFoldingAmount": 0,
                            "executePrice": 8900,
                            "amountWithoutPresents": 0,
                            "discountAmount": 0,
                            "executePointPrice": 0,
                            "dealPointAmount": 0,
                            "addTime": 1628244703671
                        },
                        {
                            "id": 93,
                            "goods": {
                                "weight": 600,
                                "point": 0,
                                "goodsTags": [],
                                "type": "NORMAL",
                                "displayUnit": "PIECE",
                                "stepValue": 1,
                                "virtualCategoryIds": [],
                                "id": 40073,
                                "name": "LV 路易威登 SOFIA 凉拖 1A8NW1",
                                "status": "ENABLE",
                                "brandId": 22007,
                                "categoryId": 14030,
                                "productId": 32012,
                                "salesPrice": 8900,
                                "marketPrice": 9900,
                                "shelfStatus": "SHELF",
                                "availableStock": 51,
                                "thumbUrl": "https://comall-magic-dev.oss-cn-beijing.aliyuncs.com/assets/upload/miao/product/0c9374bdeeb341fb6f5601f18f91ca5d_500x500.png",
                                "productStyle": {
                                    "id": 32031,
                                    "code": "1A8NW1003",
                                    "barCode": "",
                                    "styleName": "尺寸:37 ",
                                    "styleNameEn": ": "
                                },
                                "costPrice": 5000,
                                "subsiteId": null,
                                "merchantId": null,
                                "productCode": "",
                                "salesUnit": 1
                            },
                            "rewards": [],
                            "status": "VALID",
                            "select": false,
                            "distributionMemberId": null,
                            "invalidQuantityWithPresents": 0,
                            "invalidMessage": "",
                            "quantity": 0,
                            "validQuantity": 2,
                            "invalidQuantity": 0,
                            "quantityWithPresents": 0,
                            "validQuantityWithPresents": 2,
                            "weight": 0,
                            "validWeight": 1200,
                            "weightWithPresents": 0,
                            "validWeightWithPresents": 1200,
                            "amount": 17800,
                            "validAmount": 17800,
                            "pointAmount": 0,
                            "validPointAmount": 0,
                            "couponDiscountAmount": 0,
                            "totalCouponDiscountAmount": 0,
                            "dealAmount": 0,
                            "afterFoldingAmount": 0,
                            "executePrice": 8900,
                            "amountWithoutPresents": 0,
                            "discountAmount": 0,
                            "executePointPrice": 0,
                            "dealPointAmount": 0,
                            "addTime": 1628244703627
                        },
                        {
                            "id": 92,
                            "goods": {
                                "weight": 600,
                                "point": 0,
                                "goodsTags": [],
                                "type": "NORMAL",
                                "displayUnit": "PIECE",
                                "stepValue": 1,
                                "virtualCategoryIds": [],
                                "id": 40075,
                                "name": "LV 路易威登 SOFIA 凉拖 1A8NW1",
                                "status": "ENABLE",
                                "brandId": 22007,
                                "categoryId": 14030,
                                "productId": 32012,
                                "salesPrice": 8900,
                                "marketPrice": 9900,
                                "shelfStatus": "SHELF",
                                "availableStock": 47,
                                "thumbUrl": "https://comall-magic-dev.oss-cn-beijing.aliyuncs.com/assets/upload/miao/product/0c9374bdeeb341fb6f5601f18f91ca5d_500x500.png",
                                "productStyle": {
                                    "id": 32033,
                                    "code": "1A8NW1005",
                                    "barCode": "",
                                    "styleName": "尺寸:39 ",
                                    "styleNameEn": ": "
                                },
                                "costPrice": 5000,
                                "subsiteId": null,
                                "merchantId": null,
                                "productCode": "",
                                "salesUnit": 1
                            },
                            "rewards": [],
                            "status": "VALID",
                            "select": false,
                            "distributionMemberId": null,
                            "invalidQuantityWithPresents": 0,
                            "invalidMessage": "",
                            "quantity": 0,
                            "validQuantity": 2,
                            "invalidQuantity": 0,
                            "quantityWithPresents": 0,
                            "validQuantityWithPresents": 2,
                            "weight": 0,
                            "validWeight": 1200,
                            "weightWithPresents": 0,
                            "validWeightWithPresents": 1200,
                            "amount": 17800,
                            "validAmount": 17800,
                            "pointAmount": 0,
                            "validPointAmount": 0,
                            "couponDiscountAmount": 0,
                            "totalCouponDiscountAmount": 0,
                            "dealAmount": 0,
                            "afterFoldingAmount": 0,
                            "executePrice": 8900,
                            "amountWithoutPresents": 0,
                            "discountAmount": 0,
                            "executePointPrice": 0,
                            "dealPointAmount": 0,
                            "addTime": 1628244703594
                        }
                    ],
                    "quantity": 1,
                    "validQuantity": 31,
                    "invalidQuantity": 0,
                    "quantityWithPresents": 1,
                    "validQuantityWithPresents": 31,
                    "invalidQuantityWithPresents": 0,
                    "weight": 150,
                    "validWeight": 18150,
                    "weightWithPresents": 150,
                    "validWeightWithPresents": 18150,
                    "amount": 63000,
                    "validAmount": 330000,
                    "pointAmount": 0,
                    "validPointAmount": 0,
                    "payablePointAmount": 0,
                    "pointValue": 0,
                    "freightAmount": 0,
                    "discountAmount": 0,
                    "giftPoint": 0,
                    "couponDiscountAmount": 0,
                    "totalCouponDiscountAmount": 0,
                    "freightDiscountAmount": 0,
                    "goodsPayableAmount": 63000,
                    "payableAmount": 63000,
                    "eGiftCardAmount": 0,
                    "estoredValueCardAmount": 0,
                    "payableFreightAmount": 0
                }
            ],
            "shortRewards": [],
            "lastAddTime": 1628244898747,
            "cartId": "4#2001_miao",
            "quantity": 1,
            "validQuantity": 31,
            "invalidQuantity": 0,
            "quantityWithPresents": 1,
            "validQuantityWithPresents": 0,
            "invalidQuantityWithPresents": 0,
            "weight": 150,
            "validWeight": 18150,
            "weightWithPresents": 150,
            "validWeightWithPresents": 18150,
            "amount": 63000,
            "validAmount": 330000,
            "pointAmount": 0,
            "validPointAmount": 0,
            "payablePointAmount": 0,
            "pointValue": 0,
            "freightAmount": 0,
            "discountAmount": 0,
            "giftPoint": 0,
            "couponDiscountAmount": 0,
            "totalCouponDiscountAmount": 0,
            "freightDiscountAmount": 0,
            "goodsPayableAmount": 63000,
            "payableAmount": 63000,
            "cartToken": "A2D154E028C0D740389A4D983DFA7141",
            "eGiftCardAmount": 0,
            "estoredValueCardAmount": 0
        },
        "nonsupportDeliveryGoods": [
            {
                "goods": {
                    "weight": 600,
                    "point": 0,
                    "goodsTags": [],
                    "type": "NORMAL",
                    "displayUnit": "PIECE",
                    "stepValue": 1,
                    "virtualCategoryIds": [],
                    "id": 40071,
                    "name": "LV 路易威登 SOFIA 凉拖 1A8NW1",
                    "status": "ENABLE",
                    "brandId": 22007,
                    "categoryId": 14030,
                    "productId": 32012,
                    "salesPrice": 8900,
                    "marketPrice": 9900,
                    "shelfStatus": "SHELF",
                    "availableStock": 51,
                    "thumbUrl": "https://comall-magic-dev.oss-cn-beijing.aliyuncs.com/assets/upload/miao/product/0c9374bdeeb341fb6f5601f18f91ca5d_500x500.png",
                    "productStyle": {
                        "id": 32029,
                        "code": "1A8NW1001",
                        "barCode": "",
                        "styleName": "尺寸:35 ",
                        "styleNameEn": ": "
                    },
                    "costPrice": 5000,
                    "subsiteId": null,
                    "merchantId": null,
                    "productCode": "",
                    "salesUnit": 1
                },
                "quantity": 4,
                "supportDelivery": [
                    {
                        "id": "1002",
                        "name": "自提"
                    },
                    {
                        "id": "1004",
                        "name": "同城配"
                    }
                ]
            },
            {
                "goods": {
                    "weight": 600,
                    "point": 0,
                    "goodsTags": [],
                    "type": "NORMAL",
                    "displayUnit": "PIECE",
                    "stepValue": 1,
                    "virtualCategoryIds": [],
                    "id": 40072,
                    "name": "LV 路易威登 SOFIA 凉拖 1A8NW1",
                    "status": "ENABLE",
                    "brandId": 22007,
                    "categoryId": 14030,
                    "productId": 32012,
                    "salesPrice": 8900,
                    "marketPrice": 9900,
                    "shelfStatus": "SHELF",
                    "availableStock": 51,
                    "thumbUrl": "https://comall-magic-dev.oss-cn-beijing.aliyuncs.com/assets/upload/miao/product/0c9374bdeeb341fb6f5601f18f91ca5d_500x500.png",
                    "productStyle": {
                        "id": 32030,
                        "code": "1A8NW1002",
                        "barCode": "",
                        "styleName": "尺寸:36 ",
                        "styleNameEn": ": "
                    },
                    "costPrice": 5000,
                    "subsiteId": null,
                    "merchantId": null,
                    "productCode": "",
                    "salesUnit": 1
                },
                "quantity": 7,
                "supportDelivery": [
                    {
                        "id": "1002",
                        "name": "自提"
                    },
                    {
                        "id": "1004",
                        "name": "同城配"
                    }
                ]
            },
            {
                "goods": {
                    "weight": 600,
                    "point": 0,
                    "goodsTags": [],
                    "type": "NORMAL",
                    "displayUnit": "PIECE",
                    "stepValue": 1,
                    "virtualCategoryIds": [],
                    "id": 40075,
                    "name": "LV 路易威登 SOFIA 凉拖 1A8NW1",
                    "status": "ENABLE",
                    "brandId": 22007,
                    "categoryId": 14030,
                    "productId": 32012,
                    "salesPrice": 8900,
                    "marketPrice": 9900,
                    "shelfStatus": "SHELF",
                    "availableStock": 47,
                    "thumbUrl": "https://comall-magic-dev.oss-cn-beijing.aliyuncs.com/assets/upload/miao/product/0c9374bdeeb341fb6f5601f18f91ca5d_500x500.png",
                    "productStyle": {
                        "id": 32033,
                        "code": "1A8NW1005",
                        "barCode": "",
                        "styleName": "尺寸:39 ",
                        "styleNameEn": ": "
                    },
                    "costPrice": 5000,
                    "subsiteId": null,
                    "merchantId": null,
                    "productCode": "",
                    "salesUnit": 1
                },
                "quantity": 2,
                "supportDelivery": [
                    {
                        "id": "1002",
                        "name": "自提"
                    },
                    {
                        "id": "1004",
                        "name": "同城配"
                    }
                ]
            },
            {
                "goods": {
                    "weight": 600,
                    "point": 0,
                    "goodsTags": [],
                    "type": "NORMAL",
                    "displayUnit": "PIECE",
                    "stepValue": 1,
                    "virtualCategoryIds": [],
                    "id": 40073,
                    "name": "LV 路易威登 SOFIA 凉拖 1A8NW1",
                    "status": "ENABLE",
                    "brandId": 22007,
                    "categoryId": 14030,
                    "productId": 32012,
                    "salesPrice": 8900,
                    "marketPrice": 9900,
                    "shelfStatus": "SHELF",
                    "availableStock": 51,
                    "thumbUrl": "https://comall-magic-dev.oss-cn-beijing.aliyuncs.com/assets/upload/miao/product/0c9374bdeeb341fb6f5601f18f91ca5d_500x500.png",
                    "productStyle": {
                        "id": 32031,
                        "code": "1A8NW1003",
                        "barCode": "",
                        "styleName": "尺寸:37 ",
                        "styleNameEn": ": "
                    },
                    "costPrice": 5000,
                    "subsiteId": null,
                    "merchantId": null,
                    "productCode": "",
                    "salesUnit": 1
                },
                "quantity": 2,
                "supportDelivery": [
                    {
                        "id": "1002",
                        "name": "自提"
                    },
                    {
                        "id": "1004",
                        "name": "同城配"
                    }
                ]
            },
            {
                "goods": {
                    "weight": 600,
                    "point": 0,
                    "goodsTags": [],
                    "type": "NORMAL",
                    "displayUnit": "PIECE",
                    "stepValue": 1,
                    "virtualCategoryIds": [],
                    "id": 40076,
                    "name": "LV 路易威登 SOFIA 凉拖 1A8NW1",
                    "status": "ENABLE",
                    "brandId": 22007,
                    "categoryId": 14030,
                    "productId": 32012,
                    "salesPrice": 8900,
                    "marketPrice": 9900,
                    "shelfStatus": "SHELF",
                    "availableStock": 45,
                    "thumbUrl": "https://comall-magic-dev.oss-cn-beijing.aliyuncs.com/assets/upload/miao/product/0c9374bdeeb341fb6f5601f18f91ca5d_500x500.png",
                    "productStyle": {
                        "id": 32034,
                        "code": "1A8NW1006",
                        "barCode": "",
                        "styleName": "尺寸:40 ",
                        "styleNameEn": ": "
                    },
                    "costPrice": 5000,
                    "subsiteId": null,
                    "merchantId": null,
                    "productCode": "",
                    "salesUnit": 1
                },
                "quantity": 10,
                "supportDelivery": [
                    {
                        "id": "1002",
                        "name": "自提"
                    },
                    {
                        "id": "1004",
                        "name": "同城配"
                    }
                ]
            },
            {
                "goods": {
                    "weight": 600,
                    "point": 0,
                    "goodsTags": [],
                    "type": "NORMAL",
                    "displayUnit": "PIECE",
                    "stepValue": 1,
                    "virtualCategoryIds": [],
                    "id": 40070,
                    "name": "LV 路易威登 SOFIA 凉拖 1A8NW1",
                    "status": "ENABLE",
                    "brandId": 22007,
                    "categoryId": 14030,
                    "productId": 32012,
                    "salesPrice": 8900,
                    "marketPrice": 9900,
                    "shelfStatus": "SHELF",
                    "availableStock": 41,
                    "thumbUrl": "https://comall-magic-dev.oss-cn-beijing.aliyuncs.com/assets/upload/miao/product/0c9374bdeeb341fb6f5601f18f91ca5d_500x500.png",
                    "productStyle": {
                        "id": 32028,
                        "code": "1A8NW1000",
                        "barCode": "",
                        "styleName": "尺寸:34 ",
                        "styleNameEn": ": "
                    },
                    "costPrice": 5000,
                    "subsiteId": null,
                    "merchantId": null,
                    "productCode": "",
                    "salesUnit": 1
                },
                "quantity": 5,
                "supportDelivery": [
                    {
                        "id": "1002",
                        "name": "自提"
                    },
                    {
                        "id": "1004",
                        "name": "同城配"
                    }
                ]
            }
        ]
    }
];

let newCarts = carts.map(transformCartModal)

function transformCartModal({ cart }) {
    return {
        cartId: cart.cartId,
    }
}
console.log(newCarts)