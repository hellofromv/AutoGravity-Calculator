import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import calculatorReducers from './reducers/calcReducer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(calculatorReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
