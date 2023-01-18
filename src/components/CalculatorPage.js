import React from 'react';
import Calculator from './calculator';
import './Calculator.css';

const CalculatorPage = () => (
  <div className="container">
    <div className="flex-container">
      <h2 className="calculator-intro">Lets do some math!</h2>
      <div className="flex-item">
        <Calculator />
      </div>
    </div>
  </div>
);

export default CalculatorPage;
