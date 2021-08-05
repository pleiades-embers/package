const coupons = {
  满减: "全场满2000返200",
  满返: [1, 2],
  coupons: [
    {
      coupons_id: 1,
      price: 100,
      astrict_price: "满1000元可用",
      title: "LAMER现金抵值券",
      describe: "COMALL商城使用",
      time: "有效期: 2021.05.16 12:30",
      recevied: false,
    },
    {
      coupons_id: 2,
      price: 100,
      astrict_price: "满1000元可用",
      title: "LAMER现金抵值券",
      describe: "COMALL商城使用",
      time: "有效期: 2021.05.16",
      recevied: true,
    },
    {
      price: 100,
      astrict_price: "满1000元可用",
      title: "LAMER现金抵值券",
      describe: "COMALL商城使用",
      time: "有效期: 2021.05.16 12:30",
      recevied: false,
    },
  ],
};

const service = [
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
];


const parameter= [
  { type: '产地', name: '中国大陆' },
  { type: '品牌', name: 'Lammer海蓝之谜' },
  { type: '款号', name: '30278' },
  { type: '使用类型', name: '外用' },
  { type: '销售渠道', name: '商场同款(线上线下销售)' }
]