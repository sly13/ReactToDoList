import React, { Component } from 'react';

import Header from './Header';
import TaskList from './TaskList';
import Footer from './Footer';
import FontAwesome from 'react-fontawesome';
import '../App.css';
import tasks from '../futures';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<TaskList tasks={tasks} />
				<FontAwesome name='rocket' />
				<Footer />
			</div>
		);
	}
}

export default App;
