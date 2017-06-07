import { SIMPLE_MATH, EQUALS, CHECK, CONCAT_TO_ANSWERBOX } from '../actions/actionTypes';
import { initialState } from '../initialState';

// function replaces the special characters so we can use eval later
const convertSymbols = val => {
  let newVal = val.replace(/×/, '*');
  return newVal = newVal.replace(/÷/, '/');
};

const calculatorReducers = (state = initialState, action) => {
  switch(action.type) {
    case EQUALS:
      // occurs when user clicks equal sign
      // checks if last value of currentValue is not a number
      if (!Number(state.currentValue[state.currentValue.length - 1])) {
        // if true, slice off that symbol and so the remaining value is a number
        let solution = state.currentValue.slice(0, state.currentValue.length - 1);
        // solve the equation
        solution = eval(convertSymbols(solution));
        // reset state values
        return {
          ...state,
          // finalTotal will always show either 0 as a placeholder or the solution
          finalTotal: solution === undefined ? '0' : solution,
          currentValue: state.defaultValue,
          symbol: '',
          confirm: false
        }
      } else {
        let solution = eval(convertSymbols(state.currentValue));
        return {
          ...state,
          finalTotal: solution,
          currentValue: state.defaultValue,
          symbol: '',
          confirm: false
        }
      }
    case SIMPLE_MATH:
      // occurs when user presses a math symbol (not equal sign/numbers/period)
      // symbol is not set and 
      if (!state.symbol || Number(state.currentValue[state.currentValue.length - 1])) {
        return {
          ...state,
          currentValue: state.currentValue.concat(action.symbol),
          symbol: action.symbol
        }
      } else {
        return {
          ...state
        }
      }
    // checks for periods in currentValue so it doesn't concat another period if one is already there
    case CHECK:
    // occurs when user clicks period
      if (state.currentValue.indexOf('.') === -1) {
        return {
          ...state,
          currentValue: state.currentValue.concat('.'),
          confirm: true
        }
      }
      // if there is already a period
      if (state.currentValue.indexOf('.')) {
        // then just return same object
        return {
          ...state,
        }
      }
      break;
    case CONCAT_TO_ANSWERBOX:
      // occurs when user clicks number
      // user is still inputting their number so concat to currentValue
      if (state.currentValue !== '0') {
        return {
          ...state,
          currentValue: state.currentValue + action.num
        }
      } 
      // user is inputting first number value so set it as currentValue
      else if (state.currentValue === '0') {
        return {
          ...state,
          currentValue: action.num
        }
      }
      break;
    default:
      return state;
  }
};

export default calculatorReducers;