import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//working with style

function MyBorder(props){
  return(
    <div className={'MyBorder MyBorder-'+ props.color}>
      {props.children}
    </div>
  );
}

class WebPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {color:"white"}
  }

  changeColor = () => {
      if(this.state.color ==="white"){
          this.setState({color:"violet"})
      }
      if (this.state.color === "violet") {
        this.setState({ color: "white" })
    }
  }
   
  render() {
      return (
          <>
            {/* <div id="div1" style={{background:this.state.color}} onClick={this.changeColor}>
            <MyBorder color="green">
            <h1 className='MyDialog-title'>Welcome to First Dialog Box.</h1>
            <p className='MyDialog-message'>This is content from First Dialog Box.</p>
            </MyBorder>
            </div>

            <div id="div2" style={{ background: this.state.color}} onClick={this.changeColor}>
            <MyBorder color="blue">
            <h1 className='MyDialog-title'>Welcome to First Dialog Box.</h1>
            <p className='MyDialog-message'>This is content from First Dialog Box.</p>
            </MyBorder>
            </div> */}
            
            <div id="div3" style={{ background: this.state.color }} onClick={this.changeColor} onMouseOver={this.changeColor}>
            <MyBorder color="red">

            <h1 className='MyDialog-title'>Welcome to First Dialog Box.</h1>
            <p className='MyDialog-message'>This is content from First Dialog Box.</p>
            </MyBorder>
            </div>
            <button onClick={this.changeColor}>Click me</button>
            </>
      );
  }
}

ReactDOM.render(  
  <WebPage /> ,
document.getElementById('root')
);