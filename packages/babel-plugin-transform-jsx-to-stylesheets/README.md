# babel-plugin-transform-jsx-stylesheet
> Transform StyleSheet selector to style in JSX Elements.

## Installation
```sh
npm install --save-dev babel-plugin-transform-jsx-to-stylesheet
```

## Usage

### Via `.babelrc`

**.babelrc**

```json
{
  "plugins": ["transform-jsx-to-stylesheet"]
}
```

## Example

Your `component.js` that contains this code:

```js
import { Component } from 'Taro';
import './app.css';
class App extends Component {
  render() {
    return <div className="header" />
  }
}
```

Will be transpiled into something like this:

```js
import { Component } from 'Taro';
import appStyleSheet from './app_styles';

class App extends Component {
  render() {
    return <div style={styleSheet.header} />;
  }
}

const styleSheet = appStyleSheet;
```