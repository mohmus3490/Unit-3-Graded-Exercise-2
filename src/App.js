import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Desktop from './pagedraw/desktop.js';
class App extends Component {
  
  constructor(props){
    
    super(props);

    this.state = {
      text2: ''
    };
  }
  
  
  render() {
    return <Desktop onclick={this.onclick.bind(this)}/>
  }
   onclick () { alert("helo there");
  
   this.setState({
     text2: "$40.00"
   });
  }
}

export default App;
