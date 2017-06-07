import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import initialState from './initialState';
import Calculator from './containers/Calculator';
import calculatorReducers from './reducers/calcReducer';
import { SIMPLE_MATH, EQUALS, CHECK, CONCAT_TO_ANSWERBOX } from './actions/actionTypes';
import { simpleMath, equals, check, concatToAnswerBox } from './actions/actionCreators';


it('renders without crashing', () => {
  const store = createStore(calculatorReducers);
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , div);
});

describe('actions', () => {
  it ('should create an action to do simple math', () => {
    const symbol = '+';
    const expectedAction = {
      type: SIMPLE_MATH,
      symbol
    };
    expect(simpleMath(symbol)).toEqual(expectedAction);
  });

  it ('should create an action to solve the equation', () => {
    const num = '5';
    const confirm = false;
    const expectedAction = {
      type: EQUALS,
      num,
      confirm
    };
    expect(equals(num)).toEqual(expectedAction);
  });

  it ('should check if the number already contains a period', () => {
    const val = '42';
    const confirm = false;
    const expectedAction = {
      type: CHECK,
      val,
      confirm
    };
    expect(check(val)).toEqual(expectedAction);
  });

  it ('should concat the value to the input box', () => {
    const num = '1775';
    const expectedAction = {
      type: CONCAT_TO_ANSWERBOX,
      num
    };
    expect(concatToAnswerBox(num)).toEqual(expectedAction);
  });
});