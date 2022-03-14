let menus: Array<{
  id: number;
  name: string;
}> = [
  {
    id: 1,
    name: "专柜",
  },
  {
    id: 2,
    name: "综合",
  },
  {
    id: 3,
    name: "销量",
  },
  {
    id: 4,
    name: "价格",
  },
  {
    id: 5,
    name: "筛选",
  },
];

let value = 0;
let newMenus=menus.map((item, i) => {
  if (value == 0) {
    return i == 1 ? { ...item, ["name"]: "综合" } : item;
  }
  if (value == 1) {
    return i == 1 ? { ...item, ["name"]: "新品" } : item;
  }
  if (value == 2) {
    return i == 1 ? { ...item, ["name"]: "人气" } : item;
  }
});

console.log(newMenus)