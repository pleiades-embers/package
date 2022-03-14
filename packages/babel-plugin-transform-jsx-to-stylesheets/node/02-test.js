// const jSXStylePlugin = require("../src/index");
import syntaxJSX  from "babel-plugin-syntax-jsx"
import { transform }  from "babel/core"

function getTransfromCode(code) {
  return transform(code, {
    plugins: [syntaxJSX],
  }).code;
}

const code = `
import { createElement, Component } from 'rax';
import './app.css';

class App extends Component {
  render() {
    return <div className={{ container: true }} />;
  }
}`;
console.log(getTransfromCode(code));
