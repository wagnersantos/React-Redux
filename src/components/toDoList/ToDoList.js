import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import * as todosActions from '../../actions/todos';
import {connect} from 'react-redux';

class ToDoList extends Component {
	constructor(props){
		super(props);
		console.log(props);
		this.addNewToDo = this.addNewToDo.bind(this);

		this.state = {
			newToDoText:  ''
		}
	}
	addNewToDo(){

	}
	render(){
		return (
			<div>
				<div>
					<ul>
						<li>Item do todo</li>
					</ul>
				</div>
				<div>
					<input type='text' onChange={(e) => this.SetState({newToDoText: e.target.value})} 
						value={this.state.newToDoText} />
					<button onClick={this.addNewToDo}> Novo todo</button>
				</div>
			</div>
		)
	}
}

const mapDispatchToprops = dispacth => bindActionCreators(todosActions,dispacth);

export default connect(null, mapDispatchToprops)(ToDoList);