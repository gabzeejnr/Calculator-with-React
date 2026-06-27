import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import '@fontsource/orbitron';

export default function Calculator() {

  const [display, setDisplay] = useState(0);
  const [firstNum, setFirstNum] = useState(null)
  const [operand, setOperand] = useState("");
  let secondNum, result;


  //This is to CLear Display
   const clearDisplay = () => {
    setDisplay(0);
  };

  const deleteBtn = () => {
    setDisplay(prev => {
      const text = String(prev).slice(0, -1);
      return text === "" ? 0 : text;
    })
  };


  //This Code Handles Number Display.... Partly
  const numClick = (num) => {
    if (display === 0) {
      setDisplay(String(num));
    } else {
      setDisplay(prev => prev + String(num));
    };
  };

  const operator = (op) => {
    setFirstNum(display);
    setOperand(op);
    setDisplay(0);
  }

  const operandClick = (e) => {
    if (e === '+') operator('+');
    else if (e === '-') operator('-');
    else if (e === '÷') operator('/');
    else if (e === '×') operator('*');
  }

  const clickEqual = () => {
    secondNum = display;
    if (operand === '+') {
      result = Number(firstNum) + Number(secondNum);
      setDisplay(result)
    } else if (operand === '-') {
      result = Number(firstNum) - Number(secondNum);
      setDisplay(result)
    } else if (operand === '/') {
      result = Number(firstNum) / Number(secondNum);
      setDisplay(result)
    } else if (operand === '*') {
      result = Number(firstNum) * Number(secondNum);
      setDisplay(result)
    }
  }

  return (
    <div className="calc-container">
      <div className="calc-body">
        <div className="calc-screen">
          <div className="calc-display">{display}</div>
        </div>

        <div className="calc-grid">

          <button className="btn btn-action" onClick={clearDisplay}>AC</button>
          <button className="btn btn-action">%</button>
          <button className="btn btn-action" onClick={deleteBtn}><FontAwesomeIcon icon={faDeleteLeft} /></button>
          <button className="btn btn-operator" onClick={ (e) => operandClick(e.target.innerText)}>÷</button>

          <button className="btn" onClick={ () => numClick(7)}>7</button>
          <button className="btn" onClick={ () => numClick(8)}>8</button>
          <button className="btn"onClick={ () => numClick(9)}>9</button>
          <button className="btn btn-operator" onClick={ (e) => operandClick(e.target.innerText)}>×</button>

          <button className="btn" onClick={ () => numClick(4)}>4</button>
          <button className="btn" onClick={ () => numClick(5)}>5</button>
          <button className="btn" onClick={ () => numClick(6)}>6</button>
          <button className="btn btn-operator" onClick={ (e) => operandClick(e.target.innerText)}>-</button>

          <button className="btn" onClick={ () => numClick(1)}>1</button>
          <button className="btn" onClick={ () => numClick(2)}>2</button>
          <button className="btn" onClick={ () => numClick(3)}>3</button>
          <button className="btn btn-operator" onClick={ (e) => operandClick(e.target.innerText)}>+</button>

          <button className="btn btn-zero" onClick={ () => numClick(0)}>0</button>
          <button className="btn">.</button>
          <button className="btn btn-operator" onClick={clickEqual}>=</button>
        </div>
      </div>
    </div>
  );
}
