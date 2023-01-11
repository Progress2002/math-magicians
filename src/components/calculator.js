import React from 'react';
import Buttons from './buttons';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="cal-operations">
        <Buttons />
      </div>
    );
  }
}

export default Calculator;
