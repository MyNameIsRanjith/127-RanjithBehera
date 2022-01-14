import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//calci using react useState hook

function MyCalculatorWithHook(props){

  const[first,setFirst] = useState(props.a);
  const[second,setSecond] = useState(props.b);
  const[result,setResult] = useState(0);

  const handleAdd = () =>{
    setResult(parseInt(first)+parseInt(second));
  }

  const handleSub = () =>{
    setResult(parseInt(first)-parseInt(second));

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
    setResult(parseInt(first)*parseInt(second));
  }

  const handleDiv = () =>{
    setResult(parseInt(first)/parseInt(second));

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
      <p>Value of {first} and {second} is {result}</p>
      <button onClick={handleAdd}>Add</button><br/>
      <button onClick={handleSub}>Subtract</button><br/>
      <button onClick={handleMul}>Multiply</button><br/>
      <button onClick={handleDiv}>Divide</button>
    </div>
  );

}

ReactDOM.render(  
  <MyCalculatorWithHook a="10" b="50" /> ,
document.getElementById('root')
);