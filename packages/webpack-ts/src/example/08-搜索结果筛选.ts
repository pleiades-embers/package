/**
 * 搜索筛选数据
 */
export type options = {
  name: string;
  type?: string;
  data: Array<{
    name: string;
    select: boolean;
    [propName: string]: string | boolean | number;
  }>;
};

/**
 * 获取搜索筛选报文
 * 
 */

/**
 * 搜索筛选报文
 */
const options: options[] = [
  {
    name: "价格", // select 默认值  遵循排他原则  及只能有一个为true
    type: "price",
    data: [
      { name: "不限", select: false },
      { name: "¥0-499", select: false },
      { name: "¥500-999", select: false },
      { name: "¥1000-1499", select: true },
      { name: "¥1500-1999", select: false },
      { name: "¥2000+", select: false },
    ],
  },
  {
    name: "品牌",
    type: "brand",
    data: [
      { name: "全部", select: false }, //select 默认值  遵循全选反选原则 全部为true 是都为true 否则都为false   《传进来不对也没关系 前端已做数据处理》
      { name: "雅诗兰黛", id: 1, select: true },
      { name: "碧欧泉", id: 2, select: true },
      { name: "丝芙兰", id: 3, select: true },
      { name: "兰蔻", id: 4, select: false },
      { name: "SK-II", id: 5, select: false },
      { name: "娇兰", id: 6, select: false },
      { name: "资生堂", id: 7, select: false },
      { name: "雅诗兰黛", id: 8, select: false },
      { name: "碧欧泉", id: 9, select: false },
      { name: "丝芙兰", id: 10, select: false },
      { name: "兰蔻", id: 11, select: false },
      { name: "SK-II", id: 12, select: false },
      { name: "娇兰", id: 13, select: false },
      { name: "资生堂", id: 14, select: false },
    ],
  },
  {
    name: "分类",
    type: "category",
    data: [
      { name: "服饰", select: false },
      { name: "食品", select: true },
      { name: "电器", select: true },
    ],
  },
];

/**
 * 搜索匹配数据
 * 返回数据不做 sql 过滤(like) 做limit 限制也行    前端过滤关键词数据
 */

const fuzzyParams: Array<{
  id: number;
  name: string;
}> = [
  {
    id: 1,
    name: "口红大牌",
  },
  {
    id: 2,
    name: "口红迪奥",
  },
  {
    id: 3,
    name: "口红小样",
  },
  {
    id: 4,
    name: "口红套装",
  },
  {
    id: 5,
    name: "口红礼盒",
  },
  {
    id: 6,
    name: "口红不掉色不沾杯",
  },
  {
    id: 7,
    name: "口红套装礼盒",
  },
];
