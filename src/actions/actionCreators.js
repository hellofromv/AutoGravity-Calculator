import { SIMPLE_MATH, EQUALS, CHECK, CONCAT_TO_ANSWERBOX } from './actionTypes';

export function simpleMath(symbol) {
  return {
    type: SIMPLE_MATH,
    symbol
  }
};

export function equals(num) {
  return {
    type: EQUALS,
    num,
    confirm: false
  }
};

export function check(val) {
  return {
    type: CHECK,
    val,
    confirm: false
  }
};

export function concatToAnswerBox(num) {
  return {
    type: CONCAT_TO_ANSWERBOX,
    num
  }
};