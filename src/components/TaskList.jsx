import React, { Component } from "react";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Grid from "react-bootstrap/lib/Grid";
import Thumbnail from "react-bootstrap/lib/Thumbnail";
import Button from "react-bootstrap/lib/Button";

class TaskList extends Component {

	renderListItem({ id, title, text }) {
		return (
			<Col xs={6} md={4} key={id}>
				<Thumbnail>
					<h3>{title}</h3>
					<p>{text}</p>
					<p>
						<Button bsStyle="primary">Edit</Button>&nbsp;
						<Button bsStyle="danger">Delete</Button>
					</p>
				</Thumbnail>
			</Col>
		);
	}

	render() {
		return (
			<div>
				<Grid>
					<Row>
						{this.props.tasks.map(this.renderListItem)}
					</Row>
				</Grid>
			</div>
		);
	}
}

export default TaskList;
