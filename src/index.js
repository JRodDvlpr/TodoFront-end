import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';
import App from './App';

// Browser Router 
import { BrowserRouter as Router } from 'react-router-dom';

// Redux MW 
import thunk from 'redux-thunk';

// STORE - REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// REDUCER
import { reducer } from './store/reducer.js';

const store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');

ReactDOM.render(
  //setting up redux store & <Provider store={store}>
  <Provider store={ store } >
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);

