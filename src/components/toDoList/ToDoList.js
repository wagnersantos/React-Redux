import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import * as todosActions from '../../actions/todos';
import {connect} from 'react-redux';

class ToDoList extends Component {
	constructor(props){
		super(props);
		this.addNewToDo = this.addNewToDo.bind(this);
		console.log(props)

		this.state = {
			newToDoText:  ''
		}
	}
	addNewToDo(){
		this.props.addToDo(this.state.newToDoText)
		this.setState({newToDoText: ''});
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
					<input type='text' onChange={(e) => this.setState({newToDoText: e.target.value})} 
						value={this.state.newToDoText} />
					<button onClick={this.addNewToDo}> Novo todo</button>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	todos: state.todos
});

const mapDispatchToprops = dispacth => bindActionCreators(todosActions,dispacth);

export default connect(mapStateToProps, mapDispatchToprops)(ToDoList);