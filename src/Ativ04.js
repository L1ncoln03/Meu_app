import React, { useState } from 'react';
import './App-calc.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setDisplay('0');
      setExpression('');
    } else if (value === '=') {
      try {
        setDisplay(eval(expression).toString());
        setExpression('');
      } catch (error) {
        setDisplay('Error');
        setExpression('');
      }
    } else {
      setExpression((prevExpression) => prevExpression + value);
      setDisplay((prevDisplay) => (prevDisplay === '0' ? value : prevDisplay + value));
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('=')} className="equals">
          =
        </button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('C')} className="clear">
          C
        </button>
      </div>
    </div>
  );
}

export default Ativ04;