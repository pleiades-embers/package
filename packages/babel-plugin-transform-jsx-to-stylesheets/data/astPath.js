import { createElement, Component } from 'rax';
import StyleSheet from "./_styles";

class App extends Component {
  render() {
    return <div style={_getStyle({
      container: true
    })} />;
  }

}