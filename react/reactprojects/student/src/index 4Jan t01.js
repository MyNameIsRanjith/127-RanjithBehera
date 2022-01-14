import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyConverter extends React.Component{
  constructor(props)
  {
    super(props);  
    this.state = {a:10, value:""};    
    this.inrHandler = this.inrHandler.bind(this);
    this.yenHandler = this.yenHandler.bind(this);
  }
    inrHandler()
    {
    this.setState( i => (
      {
        value: i.a*75
      }
      
    ))
    }
    yenHandler()
    {
    this.setState( i => (
      {
        value: i.a*116
      }
      
    ))
    }      
  render()
  {
      return (
      <div>
        <h1>Value of ${this.state.a}  when converted, equals {this.state.value}</h1>
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