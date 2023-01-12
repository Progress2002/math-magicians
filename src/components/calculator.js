import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Btn from './eachBtn';

const Calculator = () => {
  const info = { total: 0, next: null, operation: null };
  const [state, setState] = useState(info);

  const clickReceived = (event) => {
    const buttonName = event.target.innerText;
    const answer = calculate(state, buttonName);
    setState(answer);
  };

  const { total, operation, next } = state;
  return (
    <div className="calculator">
      <div className="answerDisplay">
        {total}
        {operation}
        {next}
      </div>
      <div className="btnContainer">
        <Btn click={clickReceived} text="AC" />
        <Btn click={clickReceived} text="+/-" />
        <Btn click={clickReceived} text="%" />
        <Btn click={clickReceived} className="mathOperation" text="&#247;" />
        <Btn click={clickReceived} text="7" />
        <Btn click={clickReceived} text="8" />
        <Btn click={clickReceived} text="9" />
        <Btn click={clickReceived} className="mathOperation" text="x" />
        <Btn click={clickReceived} text="4" />
        <Btn click={clickReceived} text="5" />
        <Btn click={clickReceived} text="6" />
        <Btn click={clickReceived} className="mathOperation" text="-" />
        <Btn click={clickReceived} text="1" />
        <Btn click={clickReceived} text="2" />
        <Btn click={clickReceived} text="3" />
        <Btn click={clickReceived} className="mathOperation" text="+" />
        <Btn click={clickReceived} className="zero" text="0" />
        <Btn click={clickReceived} text="." />
        <Btn click={clickReceived} className="mathOperation" text="=" />
      </div>
    </div>
  );
};

export default Calculator;
