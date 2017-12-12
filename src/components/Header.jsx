import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import logo from "../logo.svg";

import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
	render() {
		const appNavbar = (
			<div>
				<Navbar inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<LinkContainer to='/' activeClassName="none">
								<a href="#"><img src={logo} className="App-logo" alt="logo" /> ToDoList</a>
							</LinkContainer>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>

					<Navbar.Collapse>
						<Nav pullRight>
							<LinkContainer to='/add-task' activeClassName="none">
								<NavItem eventKey={2}>Add task</NavItem>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);

		return <div>{appNavbar}</div>;
	}
}

export default Header;
