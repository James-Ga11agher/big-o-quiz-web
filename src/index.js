import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as abstractAPI from './api/abstractAPI.js';

import configureStore from './store/configureStore';
import App from './components/App';

/* eslint-disable no-console */
console.log('Render App 3');

const store = configureStore();

!window.unitTesting && ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('app')
);

abstractAPI.getAPIWrapper();
