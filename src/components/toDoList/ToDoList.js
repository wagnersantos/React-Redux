import React, {Component} from 'react';

class ToDoList extends Component {
	render(){
		return (
			<div>
				<div>
					<ul>
						<li>Item do todo</li>
					</ul>
				</div>
				<div>
					<input type='text' />
					<button> Novo todo</button>
				</div>
			</div>
		)
	}
}

export default ToDoList;