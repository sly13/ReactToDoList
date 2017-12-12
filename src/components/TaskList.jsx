import React, { Component } from "react";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Grid from "react-bootstrap/lib/Grid";
import Thumbnail from "react-bootstrap/lib/Thumbnail";
import Button from "react-bootstrap/lib/Button";

class TaskList extends Component {
	render() {
		const tasks = this.props;

		const taskList = (
			<Grid>
				<Row>
					<Col xs={6} md={4}>
						<Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
							<h3>Thumbnail label</h3>
							<p>Description</p>
							<p>
								<Button bsStyle="primary">Button</Button>&nbsp;
								<Button bsStyle="default">Button</Button>
							</p>
						</Thumbnail>
					</Col>
					<Col xs={6} md={4}>
						<Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
							<h3>Thumbnail label</h3>
							<p>Description</p>
							<p>
								<Button bsStyle="primary">Button</Button>&nbsp;
								<Button bsStyle="default">Button</Button>
							</p>
						</Thumbnail>
					</Col>
					<Col xs={6} md={4}>
						<Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
							<h3>Thumbnail label</h3>
							<p>Description</p>
							<p>
								<Button bsStyle="primary">Button</Button>&nbsp;
						 		<Button bsStyle="default">Button</Button>
							</p>
						</Thumbnail>
					</Col>
				</Row>
			</Grid>
		);

		return <div>{taskList}</div>;
	}
}

export default TaskList;
