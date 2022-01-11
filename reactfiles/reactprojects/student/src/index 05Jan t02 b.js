import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//calci, input from textbox using react useState hook

function MyCalculatorWithHook(props){

  const [values, setValues] = useState({first: '', second: '',result:''}); 
  const [result, setResult] = useState(0); 

  
  const handleChangeFirst = (event) => {
    setValues((values) => ({
      ...values,
      first: event.target.value,
    }));
  };
  const handleChangeSecond = (event) => {
    setValues((values) => ({
      ...values,
      second: event.target.value,
    }));
  };

  const handleAdd = () =>{
    setResult(parseInt(values.first)+parseInt(values.second));
  }

  const handleSub = () =>{
    setResult(parseInt(values.first)-parseInt(values.second));

    // if(parseInt(first)>parseInt(second))
    // {
    // setResult(parseInt(first)-parseInt(second));
    // }
    // else
    // {
    // setResult(parseInt(second)-parseInt(first));
    // }
  }

  const handleMul = () =>{
    setResult(parseInt(values.first)*parseInt(values.second));
  }

  const handleDiv = () =>{
    setResult(parseInt(values.first)/parseInt(values.second));

    // if(parseInt(first)>parseInt(second))
    // {
    // setResult(parseInt(first)/parseInt(second));
    // }
    // else
    // {
    // setResult(parseInt(second)/parseInt(first));
    // }
  }

  return(
    <div>
      <p>Value of {values.first} and {values.second} is {result}</p>

      <tr>
          <td><label>First Value: </label></td>
          <td><input name="first" type="text" placeholder="Enter First Value" required value={values.first} onChange={handleChangeFirst}/></td>
      </tr>
      <tr>
        <td><label>Second Value: </label></td>
        <td><input name="second" type="text" placeholder="Enter Last Value" required value={values.second} onChange={handleChangeSecond}/></td>
      </tr>

      <button onClick={handleAdd}>Add</button><br/>
      <button onClick={handleSub}>Subtract</button><br/>
      <button onClick={handleMul}>Multiply</button><br/>
      <button onClick={handleDiv}>Divide</button>
    </div>
  );

}

ReactDOM.render(  
  <MyCalculatorWithHook /> ,
document.getElementById('root')
);