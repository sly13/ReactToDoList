import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import logo from "../logo.svg";

import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';

class Header extends Component {
	render() {
		const appNavbar = (
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#"><img src={logo} className="App-logo" alt="logo" /> ToDoList</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>

				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey={1} href="#"> All List </NavItem>
						<NavItem eventKey={2} href="#"> Add task </NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);

		return <div>{appNavbar}</div>;
	}
}

export default Header;
