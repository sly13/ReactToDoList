import React, { Component } from 'react';

import Header from './Header';
import TaskList from './TaskList';
import Footer from './Footer';
import AddTask from './AddTask';
import FontAwesome from 'react-fontawesome';
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const FourOhFour = () => <h1>404</h1>

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Header />

					<Switch>
						<Route exact path="/" component={TaskList} />
						<Route exact path="/add-task" component={AddTask} />
						<Route component={FourOhFour} />
					</Switch>

					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
