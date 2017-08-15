import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import ClockTower from './components/ClockTower'
import MikeMain from './components/MikeMain.js'
import Trivia from './components/Trivia'
class App extends Component {
  render() {
    return (
      <div>
        <ClockTower />
        
          <Switch>
            <Route exact path="/" render={()=> <MikeMain /> } />
            <Route exact path="/trivia" render={()=> <Trivia />} />
          </Switch>
          
      </div>
    );
  }
}

export default App;
