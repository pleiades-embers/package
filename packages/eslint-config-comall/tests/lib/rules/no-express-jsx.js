/**
 * @fileoverview 1
 * @author no-express-jsx
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-express-jsx.js"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-express-jsx", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "no-express-jsx",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
