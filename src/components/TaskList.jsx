import React, { Component } from "react";

import tasks from '../futures';
import { Row, Col, Grid, Thumbnail, Button } from 'react-bootstrap';

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
				<h1>All Tasks</h1>
				<Grid>
					<Row>
						{tasks.map(this.renderListItem)}
					</Row>
				</Grid>
			</div>
		);
	}
}

export default TaskList;
