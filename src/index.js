const React = require('react');
const ReactDom = require('react-dom');
import App from './components/App';

/* eslint-disable no-console */
console.log('Render App 3');

!window.unitTesting && ReactDom.render(
  <App/>,
  document.getElementById('app')
);
