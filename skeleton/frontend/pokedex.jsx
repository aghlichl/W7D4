import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import * as utils from './util/api_util'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDom.render(<Root store={store} />, rootEl);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
