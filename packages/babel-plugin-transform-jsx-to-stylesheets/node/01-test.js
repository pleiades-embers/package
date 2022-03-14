const jSXStylePlugin = require("../src/index");
const syntaxJSX = require("babel-plugin-syntax-jsx");
const { transform } = require("@babel/core");
const fs=require('fs')

function getTransfromCode(code) {
  return transform(code, {
    plugins: [jSXStylePlugin, syntaxJSX],
  }).code;
}

const code = `
import { createElement, Component } from 'rax';
import './app.css';
import style from './style.css';

class App extends Component {
  render() {
    return <div className="header2" style={styles.header1} />;
  }
}`;

fs.writeFileSync('../data/01-code.js',getTransfromCode(code))
