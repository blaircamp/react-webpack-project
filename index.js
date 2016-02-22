import {createStore} from 'redux';


const store = createStore(function(state= 0, action){
	
	switch(action.type){
		case 'increment':
			return state + 1;
		case 'decrement':
			return state - 1;
		default:
		return state;
	}
});


store.subscribe(()=> console.log(store.getState()));


store.dispatch({type:'increment'});
store.dispatch({type:'increment'});
store.dispatch({type:'increment'});

store.dispatch({type:'decrement'});
store.dispatch({type:'decrement'});