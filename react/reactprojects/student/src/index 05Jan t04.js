import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//form using react useState hook

function StudentForm (props){
  
    const [values, setValues] = useState({email: '', psw:''});      
    
    const handleChangeEmail = (event) => {
      setValues((values) => ({
        ...values,
        email: event.target.value,
      }));
    };
    const handleChangePassword = (event) => {
      setValues((values) => ({
        ...values,
        psw: event.target.value,
      }));
    };

    const handleSubmit=(event) => {
      alert(values.email+''+values.psw)
      event.preventDefault();
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
        <h3>Welcome to the website..!!!</h3>
        <p>Please enter the below credentials to login.</p>
        <hr></hr>
        <table>
        
        <tr>
          <td><label>Email: </label></td>
          <td><input name="email" type="text" placeholder="Enter Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required value={values.email} onChange={handleChangeEmail}/></td>
        </tr>
        <tr>
          <td><label>Password: </label></td>
          <td><input name="psw" type="password" placeholder="Enter Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required value={values.psw} onChange={handleChangePassword}/></td>
        </tr>
        <tr>
          <td><label>Remember Me </label></td>
          <td><input name="remember" type="checkbox"/></td>
        </tr>
        </table>
        
        <input type="submit" value="Login" />
        </form>
        </div>
    );
  }

ReactDOM.render(  
  <StudentForm /> ,
document.getElementById('root')
);