import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyConverter extends React.Component{
  constructor(props)
  {
    super(props);  
    this.state = {value:""};    
    this.inrHandler = this.inrHandler.bind(this);
    this.yenHandler = this.yenHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
    inrHandler()
    {
        alert((this.state.value)*75)
    }

    yenHandler()
    {
      alert((this.state.value)*116)
    }     
    
    handleChange(event){
      this.setState({value: event.target.value});
      // alert(this.state.value);
    }
   
  render()
  {
      return (
      <div>
        <h1>Value of ${this.state.value}  when converted, equals</h1>
        <label>
          Value: 
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <button onClick={this.inrHandler}>'Rupees'</button><br/>
        <button onClick={this.yenHandler}>'Yen'</button><br/>
        
      </div>
    );
  }
}
ReactDOM.render(  
  <MyConverter /> ,
document.getElementById('root')
);