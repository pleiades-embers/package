var fs = require("fs");
var mkdirp = require("mkdirp");


module.exports = function () {
  fill(4, 10, 2, __dirname + "/target");
};
