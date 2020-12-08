import './App.css';
import React from "react";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body1';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Components/Routes';

import About from "./Pages/About";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data: '' };
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Routes />
				</div>
			</Router>
		);
	}
}

export default App;
