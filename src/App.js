import React, {Component} from 'react';
import store from './store/index';
import {Provider} from 'react-redux';

class App extends Component {
	render(){
		return (
			<Provider store={store}>
				<div>Teste</div>
			</Provider>

		)
	}
}

export default App;