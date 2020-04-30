import React from 'react';
import PropTypes from 'react-types';

function QuestionCount(props) {
  return (
    <div className="questionCount">
      Question <span>{props.counter}</span> of <span>{props.total}</span>
  </div>
);
}

QuestionCount.PropTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;
