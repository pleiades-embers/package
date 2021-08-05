const assert = require("assert");
const path = require("path");
const fs = require("fs");
let glob = undefined;
try{
  glob=require("glob");
}catch(_err){

}
const isWindows = process.platform === "win32";
const defaultGlobOpts = {
    nosort: true,
    silent: true,
};

const defaults = (options) => {
  const methods = ["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"];
  methods.forEach((m) => {
    options[m] = options[m] || fs[m];
    m = m + "Sync";
    options[m] = options[m] || fs[m];
  });

  if (options.glob === false) {
    options.disableGlob = true;
  }
  // if (options.disableGlob !== true && glob === undefined) {
  //     throw new Error('glob dependency not found, set `options.disableGlob=true` if intentional')
  // }

  options.disableGlob=options.disableGlob||false;
  options.glob=options.glob||defaultGlobOpts;

};

const rimraf = (p, options, cb) => {
  if (typeof options === "function") {
    cb = options;
    options = {};
  }

  assert(p, "rimraf: missing path");
  assert.equal(typeof p, "string", "rimraf: path should be a string");
  assert.equal(typeof cb, "function", "rimraf: callback function function");
  assert(options, "rimraf: invalid options argument provided");
  assert.equal(typeof options, "object", "rimraf: options should be object");

  defaults(options);

  let busyTries=0;
  let errState=null
  let n=0

  // const next=(er)=>{
  //   errState=errState||er
  //   if(--n===0) cb{errState}
  // }


};
const fixWinEPERMSync = (p, options, er) => {
  assert(p);
  assert(options);

  try {
    options.chmodSync(p, 0o666);
  } catch (er2) {
    if (er2.code === "ENOENT") return;
    else throw er;
  }

  let stats;
  try {
    stats = options.statSync(p);
  } catch (er3) {
    if (er3.code === "ENOENT") return;
    else throw er;
  }

  if (stats.isDirectory()) rmdirSync(p, options, er);
  else options.unlinkSync(p);
};
const rimrafSync=(p,options)=>{
  options=options||{};
  defaults(options)

  assert(p, "rimraf: missing path");
  assert.equal(typeof p, "string", "rimraf: path should be a string");
  assert(options, "rimraf: missing options");
  assert.equal(typeof options, "object", "rimraf: options should be object");

  let results
  if(options.disableGlob||!glob.hasMagic(p)){
    results = [p]
  }else{
    try{
      options.lstatSync(p)
      results=[p]
    }catch(err){
      results=glob.sync(p,options.glob)
    }
  }
  if(!results.length) return

  for(let i=0;i<results.length;i++){
    const p=results[i]
    let st
    try{
      st=options.lstatSync(p)
    }catch(er){
      if(er.code==="ENOENT") return

      if(er.code==="EPERM" && isWindows) fixWinEPERMSync(p,options,er)
    }

    try{
      if (st && st.isDirectory()) rmdirSync(p, options, null);
      else options.unlinkSync(p)
    }catch(er){

    }
  }

}
const rmdirSync = (p, options, originalEr) => {
  assert(p);
  assert(options);

  try {
    options.rmdirSync(p);
  } catch (er) {
    if (er.code === "ENOENT") return;
    if (er.code === "ENOTDIR") throw originalEr;
    if (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM")
      rmkidsSync(p, options);
  }
};

const rmkidsSync = (p, options) => {
  assert(p);
  assert(options);
  options.readdirSync(p).forEach((f) => rimrafSync(path.join(p, f), options));

  // We only end up here once we got ENOTEMPTY at least once, and
  // at this point, we are guaranteed to have removed all the kids.
  // So, we know that it won't be ENOENT or ENOTDIR or anything else.
  // try really hard to delete stuff on windows, because it has a
  // PROFOUNDLY annoying habit of not closing handles promptly when
  // files are deleted, resulting in spurious ENOTEMPTY errors.
  const retries = isWindows ? 100 : 1;
  let i = 0;
  do {
    let threw = true;
    try {
      const ret = options.rmdirSync(p, options);
      threw = false;
      return ret;
    } finally {
      if (++i < retries && threw) continue;
    }
  } while (true);
};

module.exports = rimraf;
rimraf.sync=rimrafSync