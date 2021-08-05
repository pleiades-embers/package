function _mergeStyles() {
  var newTarget = {};

  for (var index = 0; index < arguments.length; index++) {
    var target = arguments[index];

    for (var key in target) {
      newTarget[key] = Object.assign(newTarget[key] || {}, target[key]);
    }
  }

  return newTarget;
}
import { createElement, Component } from 'rax';
import appStyleSheet from "./app.css";
import styleStyleSheet from "./style.css";

var _styleSheet = _mergeStyles(appStyleSheet, styleStyleSheet);

class App extends Component {
  render() {
    return <div style={[_styleSheet["header2"], styles.header1]} />;
  }

}