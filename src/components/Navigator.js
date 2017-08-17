import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize';
import helper from '../utility/helper/helper';

class Navigator extends Component {
	constructor(){
		super()

		this.state = {
			array: []
    }
}

render(){
	return(


			<Navbar brand='Ying' className="navbar navbar-default"right>
				<Link to="about"><NavItem href='/about'>About Me</NavItem></Link>
				<NavItem href='#'>Projects</NavItem>
				<NavItem href='#'>Contact</NavItem>
			</Navbar>
	

		)
	}
}
export default Navigator