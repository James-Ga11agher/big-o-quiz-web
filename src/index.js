const React = require('react');
const ReactDom = require('react-dom');
import App from './components/App';


console.log('Render App 3');

ReactDom.render(
  <App/>,
  document.getElementById('app')
);
