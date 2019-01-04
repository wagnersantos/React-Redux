impoort {ADD_ARTICLE} from '../constatns/actions-types';

const InitialState = {
	articles: []
}

function RootReducer(state = InitialState, action){
	if(action.type === ADD_ARTICLE){
			return object.assign({},{
				articles: state.articles.concat(action.payload);
			});
	}
	return state;
}

export default RootReducer;