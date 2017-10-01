import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize';
import helper from '../utility/helper/helper';

class Navi extends Component {
	constructor(){
		super()

		this.state = {
			array: []
    }
}

render(){
	return(

			
				<Navbar brand='Ying' className="navbar navbar-default right">
					<div className="navi">
						<Link to="about"><NavItem href='/about'>About Me</NavItem></Link>
						<Link to="about-life"><NavItem href='/about'>About Life</NavItem></Link>
						<NavItem>Projects</NavItem>
						<Link to="/Monies"><NavItem href="/monies">$</NavItem></Link>
						<Link to="/contact"><NavItem href='#'>Contact</NavItem></Link>

					</div>
				</Navbar>
			
	

		)
	}
}
export default Navi