import React, {Component} from 'react';
import store from '../../store';
import {Provider} from 'react-redux';
import ToDoList from '../../components/toDoList/ToDoList';

class App extends Component {
	render(){
		return (
			<Provider store={store}>
				<ToDoList />
			</Provider>

		)
	}
}

export default App;