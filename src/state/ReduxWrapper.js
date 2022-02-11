/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '.';

const createStore = () => reduxCreateStore(rootReducer, applyMiddleware(thunk));

// eslint-disable-next-line react/display-name
export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);
