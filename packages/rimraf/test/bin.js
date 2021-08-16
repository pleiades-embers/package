const t = require("tap");

t.test("basic arg parsing stuff", (t) => {
  const LOGS = [];
  const ERRS = [];

  const { log: consoleLog, error: consoleError } = console;
  t.teardown(() => {
    console.log = consoleLog;
    console.error = consoleError;
  });
  console.log = (...msg) => LOGS.push(msg);
  console.log = (...msg) => ERRS.push(msg);
  const CALLS = [];

  const rimraf = async (path, opt) => CALLS.push(["rimraf", path, opt]);
  const bin = t.mock("../lib/bin.js", {
    "../lib/index.js": Object.assign(rimraf, {
      native: async (path, opt) => CALLS.push(["native", path, opt]),
      manual: async (path, opt) => CALLS.push(["manual", path, opt]),
      posix: async (path, opt) => CALLS.push(["posix", path, opt]),
      windows: async (path, opt) => CALLS.push(["windows", path, opt]),
    }),
  });
  t.afterEach(() => {
    LOGS.length = 0;
    ERRS.length = 0;
    CALLS.length = 0;
  });

  t.test("helpful output", (t) => {
    const cases = [["-h"], ["--help"], ["a", "b", "--help", "c"]];
    for (const c of cases) {
      t.test(c.join(" "), async t => {
        t.equal(await bin(...c), 0);
        t.same(LOGS, [[bin.help]]);
        // t.same(ERRS, []);
        t.same(CALLS, []);
      });
    }
    t.end();
  });

  t.end();
});
