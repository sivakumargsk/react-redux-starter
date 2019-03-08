import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import AppRouter from './AppRouter';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
