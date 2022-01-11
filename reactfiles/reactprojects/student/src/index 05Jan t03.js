import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//form using react useState hook

function StudentForm (props){
  
    const [values, setValues] = useState({fname: '', lname: '', age:17, email: '', psw:'', pswrepeat:''});      
    
    const handleChangeFirstName = (event) => {
      setValues((values) => ({
        ...values,
        fname: event.target.value,
      }));
    };
    const handleChangeLastName = (event) => {
      setValues((values) => ({
        ...values,
        lname: event.target.value,
      }));
    };
    const handleChangeAge = (event) => {
      setValues((values) => ({
        ...values,
        age: event.target.value,
      }));
    };
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
    const handleChangeRepeatPassword = (event) => {
      setValues((values) => ({
        ...values,
        pswrepeat: event.target.value,
      }));
    };

    const handleSubmit=(event) => {
      alert(values.fname+''+values.lname+''+''+values.age+''+values.email+''+values.psw+''+values.pswrepeat)
      event.preventDefault();
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <p>Please fill in this form to create an account.</p>
        <hr></hr>
        <table>
        <tr>
          <td><label>Name: </label></td>
          <td><input name="fname" type="text" placeholder="Enter First Name" required value={values.fname} onChange={handleChangeFirstName}/></td>
        </tr>
        <tr>
          <td><label>Last Name: </label></td>
          <td><input name="lname" type="text" placeholder="Enter Last Name" required value={values.lname} onChange={handleChangeLastName}/></td>
        </tr>
        <tr>
          <td><label>Age</label></td>
          <td><input name="age" type="number" required value={values.age} onChange={handleChangeAge}/></td>
        </tr>
        <tr>
          <td><label>Contact:</label></td>
          <td><input name="phone" type="tel" id="phone"  pattern="[0-9]{8,15}"/></td>
        </tr>
        <tr>
          <td><label>Email: </label></td>
          <td><input name="email" type="text" placeholder="Enter Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required value={values.email} onChange={handleChangeEmail}/></td>
        </tr>
        <tr>
          <td><label>Password: </label></td>
          <td><input name="psw" type="password" placeholder="Enter Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required value={values.psw} onChange={handleChangePassword}/></td>
        </tr>
        <tr>
          <td><label>Repeat Password: </label></td>
          <td><input name="pswrepeat" type="password" placeholder="Repeat Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required value={values.pswrepeat} onChange={handleChangeRepeatPassword}/></td>
        </tr>
        <tr>
          <td><label>Remember Me </label></td>
          <td><input name="remember" type="checkbox"/></td>
        </tr>
        </table>
        
        <input type="submit" value="Sign Up" />
        </form>
        </div>
    );
  }

ReactDOM.render(  
  <StudentForm /> ,
document.getElementById('root')
);