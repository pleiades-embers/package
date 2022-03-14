

import {join} from "path"
const buble = require("rollup-plugin-buble"); //ES2015 转换
const typescript = require("rollup-plugin-typescript2");


export default {
  input:join(__dirname,"src/index.ts"),
  external:["inversify"],
  output: [
    {
      file: join(__dirname,"dist/index.js"),
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
  ],
  plugins: [typescript(), buble()],
};

