const options = {
  categories: [
    { id: 12008, name: '男装', selected: false },
    { id: 14009, name: '奢侈品女装', selected: false },
    { id: 14011, name: '口红', selected: false },
    { id: 14012, name: '乳液面霜', selected: false },
    { id: 14014, name: '香水', selected: false },
    { id: 14015, name: '手机', selected: false },
    { id: 14016, name: '相机', selected: false },
    { id: 14017, name: '平板电脑', selected: false },
    { id: 14018, name: '鼠标键盘', selected: false },
    { id: 14019, name: '耳机', selected: false },
    { id: 14020, name: '奢侈品腕表', selected: false },
    { id: 14022, name: '奢侈品包', selected: false },
    { id: 14024, name: '黄铂金', selected: false },
    { id: 14027, name: '奢侈品男装', selected: false },
    { id: 14030, name: '奢侈品女鞋', selected: false },
    { id: 14033, name: '奢侈品男鞋', selected: false },
    { id: 16019, name: '鲜花宠物', selected: false },
    { id: 16021, name: '柑橘橙柚柠', selected: false },
    { id: 16022, name: '苹果梨蕉', selected: false },
    { id: 16023, name: '葡提浆果', selected: false },
    { id: 16027, name: '西瓜蜜瓜', selected: false },
    { id: 16030, name: '豆瓜果茄', selected: false },
    { id: 16034, name: '营养菌菇', selected: false },
    { id: 16036, name: '鸡蛋/蛋类', selected: false },
    { id: 16040, name: '加工水产', selected: false },
    { id: 16044, name: '酸奶乳酸菌', selected: false },
    { id: 16050, name: '火锅丸滑', selected: false },
    { id: 16054, name: '米面粮油', selected: false },
    { id: 16062, name: '功能饮料', selected: false },
    { id: 16069, name: '薯片膨化', selected: false },
    { id: 16076, name: '家居日用', selected: false },
    { id: 16081, name: '纸品湿巾', selected: false },
    { id: 16090, name: '厨房小电', selected: false }
  ],
  brands: [
    { id: 20007, name: 'Champion「冠军」', initial: null, selected: false },
    { id: 22007, name: '路易威登', initial: null, selected: false },
    { id: 22008, name: '古驰', initial: null, selected: false },
    { id: 22009, name: '普拉达', initial: null, selected: false },
    { id: 22010, name: '香奈儿', initial: null, selected: false },
    { id: 22011, name: '博柏利', initial: null, selected: false },
    { id: 22012, name: '迪奥', initial: null, selected: false },
    { id: 24007, name: '苹果', initial: null, selected: false },
    { id: 26007, name: '佳能', initial: null, selected: false },
    { id: 26008, name: '百达翡丽', initial: null, selected: false },
    { id: 26009, name: '欧米茄', initial: null, selected: false },
    { id: 26010, name: '卡地亚', initial: null, selected: false },
    { id: 26011, name: '积家', initial: null, selected: false },
    { id: 28007, name: '其他品牌', initial: null, selected: false },
    { id: 28008, name: '初篱坊', initial: null, selected: false },
    { id: 28009, name: '三元乳业', initial: null, selected: false },
    { id: 28010, name: '安井', initial: null, selected: false },
    { id: 28011, name: '福临门', initial: null, selected: false },
    { id: 28012, name: '红牛', initial: null, selected: false },
    { id: 28013, name: '太阳', initial: null, selected: false },
    { id: 28014, name: '禧天龙', initial: null, selected: false },
    { id: 28015, name: '维达', initial: null, selected: false },
    { id: 28016, name: '康多乐', initial: null, selected: false },
    { id: 28017, name: '美的', initial: null, selected: false },
    { id: 30007, name: '纪梵希', initial: null, selected: false }
  ],
  price_ranges: [
    { min_price: 0, max_price: 316000, selected: false },
    { min_price: 316000, max_price: 632000, selected: false },
    { min_price: 632000, max_price: 948000, selected: false },
    { min_price: 948000, max_price: 1264000, selected: false },
    { min_price: 1264000, max_price: 1580000, selected: false }
  ]
};


let results= Object.keys(options).map(item=>{
  return options[item]
})

// console.log(results);

let strStr="1112321,123123,213,12,34,45,6,"

console.log(strStr.substring(1,strStr.length-1));

