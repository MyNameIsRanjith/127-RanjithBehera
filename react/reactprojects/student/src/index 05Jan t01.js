import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//working with forms (all handle changes is a single handler)

class StudentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {fname:'',lname:'',remember:true, age:17};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    //this.setState({value: event.target.value});
    const target = event.target;
    const value = target.name === "remember" ? target.checked: target.value;
    const name = target.name;

    console.log(name +" "+ value);
    this.setState({[name]:value});
  }

  handleSubmit(event){
    alert('Are you sure you want to submit the details: '+this.state.fname+" "+this.state.lname+" "+this.state.age+" "+" "+this.state.email+" "+" "+this.state.psw+" "+" "+this.state.pswrepeat+" "+ this.state.remember);
    event.preventDefault();
  }

  render(){
    return(
        <div>
        <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>
        <p>Please fill in this form to create an account.</p>
        <hr></hr>
        <table>
        <tr>
          <td><label>Name: </label></td>
          <td><input name="fname" type="text" placeholder="Enter First Name" required value={this.state.fname} onChange={this.handleChange}/></td>
        </tr>
        <tr>
          <td><label>Last Name: </label></td>
          <td><input name="lname" type="text" placeholder="Enter Last Name" required value={this.state.lname} onChange={this.handleChange}/></td>
        </tr>
        <tr>
          <td><label>Age</label></td>
          <td><input name="age" type="number" required value={this.state.age} onChange={this.handleChange}/></td>
        </tr>
        <tr>
          <td><label>Contact:</label></td>
          <td><input type="tel" id="phone" name="phone" pattern="[0-9]{8,15}"/></td>
        </tr>
        <tr>
          <td><label>Email: </label></td>
          <td><input name="email" type="text" placeholder="Enter Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required value={this.state.email} onChange={this.handleChange}/></td>
        </tr>
        <tr>
          <td><label>Password: </label></td>
          <td><input name="psw" type="password" placeholder="Enter Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required value={this.state.psw} onChange={this.handleChange}/></td>
        </tr>
        <tr>
          <td><label>Repeat Password: </label></td>
          <td><input name="pswrepeat" type="password" placeholder="Repeat Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required value={this.state.pswrepeat} onChange={this.handleChange}/></td>
        </tr>
        <tr>
          <td><label>Remember Me </label></td>
          <td><input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleChange}/></td>
        </tr>
        </table>
        
        <input type="submit" value="Sign Up" />
        </form>
        </div>
    );
  }
}

ReactDOM.render(  
  <StudentForm /> ,
document.getElementById('root')
);