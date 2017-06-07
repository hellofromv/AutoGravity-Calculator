import React, { Component } from 'react';
import { connect } from 'react-redux';

// component that holds the final answer and the input box
class AnswerBox extends Component {
  render() {
    return (
      <div>
        <p>
          Ans = {this.props.finalTotal}
        </p>
        <input id="answer-box" type="number" name="answers" placeholder={this.props.currentValue}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentValue: state.currentValue,
    finalTotal: state.finalTotal
  }
}

export default connect(mapStateToProps)(AnswerBox);
