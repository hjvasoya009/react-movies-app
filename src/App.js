import React, { Component } from 'react'
import styled from 'styled-components'
import TabViewContainer from './containers/TabViewContainer';

class App extends Component {
	render() {
		return (
			<AppContainer className="App">
				<header className="App-header">
					<h1 className="appTitle">React Movies App</h1>
				</header>
				<TabViewContainer />
			</AppContainer>
		)
	}
}

const AppContainer = styled.div`
    max-width: 1500px;
    margin: 0 auto;

	.appTitle {
		text-align: center;
		border: 5px solid #000;
		padding: 1rem;
		margin-bottom: 5rem;
	}
`;

export default App;
