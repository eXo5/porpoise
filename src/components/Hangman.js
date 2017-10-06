import React, { Component } from 'react';
import { Button } from 'react-materialize'

class Hangman extends Component {
  constructor(){
    super()
    this.state ={
      words: []
    }
  }
  render() {
    return (
      <div>
        <h1>Hangman</h1>
      </div>
    );
  }
}

export default Hangman;
