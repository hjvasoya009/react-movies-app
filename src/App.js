import React, { Component } from 'react'
import SearchForm from './components/SearchForm';
// import './App.css';
import DataContainer from './containers/DataContainer';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">React Movies App</h1>
					<SearchForm />
					<DataContainer />
				</header>
			</div>
		)
	}
}
