import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { simpleMath, equals, check, concatToAnswerBox } from '../actions/actionCreators';

class CalculatorButtons extends Component {
  render() {
    return (
      <div className="btns-container">
        {this.props.buttons.map((item, index) => {
          if (item === '0' || Number(item)) {
            return (
              <button className="calc-btns numbers" key={index} onClick={this.props.concatToAnswerBox.bind(this.props.currentValue, item)} >
                <span className="btn-value">{item}</span>
              </button>
            )  
          }
          if (item === '.') {
            return (
              <button className="calc-btns numbers" key={index} onClick={this.props.check.bind(this.props.currentValue, item)} >
                <span className="btn-value">{item}</span>
              </button>
            )
          }
          if (item === '=') {
            return (
              <button className="calc-btns equals" key={index} onClick={this.props.equals.bind(this.props.finalTotal)} >
                <span className="btn-value">{item}</span>
              </button>
            )
          } else {
            return (
              <button className="calc-btns arithmetic" key={index} onClick={() => {
                  if (this.props.symbol.length <= 1) {
                    this.props.simpleMath.bind(this.props.currentValue, item)()
                  }
              }} >
                <span className="btn-value">{item}</span>
              </button>
            )
          }
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentValue: state.currentValue,
    finalTotal: state.finalTotal,
    symbol: state.symbol,
    buttons: state.buttons
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    simpleMath,
    equals,
    check,
    concatToAnswerBox
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorButtons);