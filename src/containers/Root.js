import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import reducer from '../reducer';
import {setInitialState} from '../actions';
import App from './App';

/** STORE **/
const loggerMiddleware = createLogger();

const store = applyMiddleware(
  loggerMiddleware
)(createStore)(reducer);

store.dispatch(setInitialState());

/** ROOT OBJECT **/
export default React.createClass({
  render: function () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
});

