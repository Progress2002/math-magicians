import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CalculatorPage from './components/CalculatorPage';
import Home from './components/HomePage';
import Quote from './components/QuotePage';
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <header>
          <div className="logo">Math Magicians</div>
          <nav>
            <ul>
              <li>
                <Link className="link" to="/">Home</Link>
              </li>
              <li>
                <Link className="link" to="/calculator">Calculator</Link>
              </li>
              <li>
                <Link className="link" to="/quote">Quote</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
