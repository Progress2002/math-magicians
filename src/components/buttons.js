import React from 'react';

class Buttons extends React.PureComponent {
  render() {
    return (
      <div className="btnContainer">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="mathOperation">
          &#247;
        </button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="mathOperation">
          x
        </button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="mathOperation">
          -
        </button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="mathOperation">
          +
        </button>
        <button type="button" className="zero">
          0
        </button>
        <button type="button">.</button>
        <button type="button" className="mathOperation">
          =
        </button>
      </div>
    );
  }
}
export default Buttons;
