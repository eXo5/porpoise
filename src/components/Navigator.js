import React, {Component} from 'react'
import { Nav, NavItem } from 'react-bootstrap';
import helper from '../utility/helper/helper';

class Navi extends Component {
	constructor(){
		super()

		this.state = {
			array: []
    }

    this.handleSelect =(selectedKey) => {
    console.log(`selected ${selectedKey}`);
  }

}

render(){
	return(

			<div>
 <Nav
          bsStyle="pills"
          justified
          activeKey={1}
          onSelect={key => this.handleSelect(key)}
        >
          <NavItem id="nav1" eventKey={1} href="/">
            Home
          </NavItem>
          <NavItem id="nav2" eventKey={2} href="/contact">
            Contact
          </NavItem>
          <NavItem id="nav3" eventKey={3} href="/trivia">
            Trivia
          </NavItem>
          <NavItem id="nav4" eventKey={4} disabled href="/hangman">
            Hangman
          </NavItem>
          <NavItem id="nav5" eventKey={5} href="/breakonthrough">
 						The OtherSi
          </NavItem>

        </Nav>
        <br />

      </div>

		)
	}
}
export default Navi