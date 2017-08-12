import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MikeMain from './MikeMain.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

            
        </div>
        <p className="App-intro">
          <MikeMain />
        </p>
      </div>
    );
  }
}

export default App;
