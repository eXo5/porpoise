import React, { Component } from 'react'
import { Button } from 'react-materialize'
import HangmanStart from './HangmanStart'
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
          <h6>Coming Soon!</h6>
          <HangmanStart />
      </div>
    );
  }
}

export default Hangman;
