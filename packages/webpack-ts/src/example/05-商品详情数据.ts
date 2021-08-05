const productsDetail = {
  product: {
    id: "30012",
    name: "LV 路易威登 CHERIE露跟高跟鞋 1A8UMN",
    pics: [
      //商品
      { url: "http://xxx.mp4", type: "video" },
      { url: "http://xxx.png", type: "pic" },
    ],
    service: [
      //服务
      {
        title: "七天无理由",
        explain: "支持7天无理由退货",
        icon: "https://b-puzhehei-cdn.co-mall.net/products-detail/icon_seven%402x.png",
      },
      {
        title: "正品保障",
        explain: "保证正品,假一赔十",
        icon: "https://b-puzhehei-cdn.co-mall.net/products-detail/icon_quality%20goods%402x.png",
      },
    ],
    attr: [
      { type: "产地", name: "中国大陆" },
      { type: "品牌", name: "Lammer海蓝之谜" },
      { type: "款号", name: "30278" },
      { type: "使用类型", name: "外用" },
      { type: "销售渠道", name: "商场同款(线上线下销售)" },
    ],
    graphicDetails: ["http://xxx.png", "http://xxx.png"], //商品文描
    sku: {
      // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
      // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
      specif_tree: [
        {
          skuKeyName: "颜色", // skuKeyName：规格类目名称
          skuKeyStr: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          v: [
            {
              skuValueId: "1", // skuValueId：规格值 id
              name: "红色", // skuValueName：规格值名称
              imgUrl: "https://img01.yzcdn.cn/1.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
            },
            {
              id: "1",
              name: "蓝色",
              imgUrl: "https://img01.yzcdn.cn/2.jpg",
            },
          ],
        },
      ],
      // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
      skulist: [
        {
          id: 2259, // skuId
          specif: [
            { skuKeyStr: "s1", skuValueId: "1" },
            { skuKeyStr: "s2", skuValueId: "2" },
          ],
          salesPrice: 7400, 
          marketPrice: 8400, 
          stock_num: 0, // 当前 sku 组合对应的库存
        },
        {
          id: 2260, // skuId
          specif: [
            { skuKeyStr: "s1", skuValueId: "2" },
            { skuKeyStr: "s2", skuValueId: "1" },
          ],
          salesPrice: 7400, 
          marketPrice: 8400, 
          stock_num: 120, // 当前 sku 组合对应的库存
        },
        {
          id: 2270, // skuId
          specif: [
            { skuKeyStr: "s1", skuValueId: "4" },
            { skuKeyStr: "s2", skuValueId: "2" },
          ],
          salesPrice: 2400, 
          marketPrice: 3700, 
          stock_num: 5, // 当前 sku 组合对应的库存
        },
      ],
      price: "1.00", // 默认价格（单位元）
      stock_num: 227, // 商品总库存
      collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
      none_sku: false, // 是否无规格商品
      hide_stock: false, // 是否隐藏剩余库存
    },
  },
};
