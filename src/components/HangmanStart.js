import React, { Component } from 'react';
import { Button } from 'react-materialize'

class HangmanStart extends Component {
  constructor(){
    super()
    this.state ={
      words: []
    }
this.start = () => {
  
  }
}

  render() {
     let runGame = () => {

        document.querySelector("#game").appendDiv("<p>WHATTUP MAN</p>")

            alert("OK.")
    }

    return (
      <div>
        <Button onClick={runGame()}>Start Game</Button>
        <div id="game">
        </div>
      </div>
    );
  }
}

export default HangmanStart;
