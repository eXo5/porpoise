import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import ClockTower from './components/ClockTower'
import MikeMain from './components/MikeMain'
import Trivia from './components/Trivia'
import AboutMe from './components/AboutMe'
class App extends Component {
  render() {
    return (
      <div>
        <ClockTower />
        
          <Switch>
            <Route exact path="/" render={()=> <MikeMain /> } />
            <Route exact path="/trivia" render={()=> <Trivia />} />
            <Route exact path="/about" render={()=> <AboutMe />} />
          </Switch>
          
      </div>
    );
  }
}

export default App;
