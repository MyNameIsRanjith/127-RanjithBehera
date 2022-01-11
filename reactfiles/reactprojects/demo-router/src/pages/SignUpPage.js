// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// export default function SignUpPage(){
// return(
// class SignUp extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {fname:'',lname:'',remember:true, age:17};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event){
//     //this.setState({value: event.target.value});
//     const target = event.target;
//     const value = target.name === "remember" ? target.checked: target.value;
//     const name = target.name;

//     console.log(name +" "+ value);
//     this.setState({[name]:value});
//   }

//   handleSubmit(event){
//     alert('Are you sure you want to submit the details: '+this.state.fname+" "+this.state.lname+" "+this.state.age+" "+" "+this.state.email+" "+" "+this.state.psw+" "+" "+this.state.pswrepeat+" "+ this.state.remember);
//     event.preventDefault();
//   }

//   render(){

    import React from "react";
    import { Link } from "react-router-dom";

    export default function SignUpPage(){
    return(        
        <div>
        <form>
        <h3>Thank You For Choosing Us..!!</h3>
        <p>Please fill in this form to create an account.</p>
        <hr></hr>
        <table>
        <tr>
          <td><label>Name: </label></td>
          <td><input name="fname" type="text" placeholder="Enter First Name" required/></td>
        </tr>
        <tr>
          <td><label>Last Name: </label></td>
          <td><input name="lname" type="text" placeholder="Enter Last Name" required/></td>
        </tr>
        <tr>
          <td><label>Age</label></td>
          <td><input name="age" type="number" required/></td>
        </tr>
        <tr>
          <td><label>Contact:</label></td>
          <td><input type="tel" name="phone" pattern="[0-9]{8,15}" required/></td>
        </tr>
        <tr>
          <td><label>Email: </label></td>
          <td><input name="email" type="text" placeholder="Enter Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/></td>
        </tr>
        <tr>
          <td><label>Password: </label></td>
          <td><input name="psw" type="password" placeholder="Enter Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/></td>
        </tr>
        <tr>
          <td><label>Repeat Password: </label></td>
          <td><input name="pswrepeat" type="password" placeholder="Repeat Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/></td>
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