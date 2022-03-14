// import mediaQuery from 'css-mediaquery';
import parseCSS from 'css/lib/parse'
const transformDecls = (styles, declarations, result, options) => {};

const transform = (css, options) => {
  // const {stylesheet}=parseCSS(css)
  // const rules = stylesheet.rules;

  return css;
};

console.log(
  transform(`
.test {
  flex: 1;
}
`)
);

export default transform;
