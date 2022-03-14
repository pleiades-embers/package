const pics = [
  "https://comall-magic-test.oss-cn-beijing.aliyuncs.com/products-detail/未裁剪视频.mp4",
  "https://comall-magic-test.oss-cn-beijing.aliyuncs.com/assets/upload/miao/image/b960b6ab6b58ff1328111ff8bf63e082.png",
  "https://comall-magic-test.oss-cn-beijing.aliyuncs.com/assets/upload/miao/image/37a3e08a4e34fe781e1c6880d2774963.png",
  "https://comall-magic-test.oss-cn-beijing.aliyuncs.com/assets/upload/miao/image/58fccd38830d3f3fc97acf92d84b642d.png",
  "https://comall-magic-test.oss-cn-beijing.aliyuncs.com/assets/upload/miao/image/9f2d1de80855042bd660e5f8e01b1eed.png",
  "https://comall-magic-test.oss-cn-beijing.aliyuncs.com/assets/upload/miao/image/473df81f3a6d0094cf7b4164c1a3e6cd.png",
];

let postf = pics[0].substring(pics[0].lastIndexOf("."), pics[0].length);

let previewImage = pics.filter((pic) => {
  return (
    pic.substring(pic.lastIndexOf("."), pic.length) !== ".mp4"
  );
});
