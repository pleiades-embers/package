let consignee: any = {
  id: 2,
  name: "张三",
  mobile: "13012341234",
  address: "渔阳置业大厦",
  regions: [
    {
      id: 110105008,
      name: "安贞街道",
    },
    {
      id: 110000,
      name: "北京",
    },
    {
      id: 110105,
      name: "朝阳区",
    },
  ],
  selected: false,
  valid: true,
  tip: "",
  default: false,
  regionId: 110105008,
};

var regions = consignee.regions.sort(({ id: idA }, { id: idB }) => idA - idB);

console.log(regions);
