// import {createStore} from 'redux';
const Redux = require('redux');
// reducer
function counter (state = 0, action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'ODD_INCREMENT':
            return state + 2;
        default:
            return state;
    }
}

//store { subscribe, disptch, getState }
const store = Redux.createStore( counter ); // expose store registered counter




// subscribe
function printSate(){
    console.log(store.getState());
}


store.subscribe(printSate);

//action
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})

store.dispatch({type:'DECREMENT'})
store.dispatch({type:'DECREMENT'})
store.dispatch({type:'DECREMENT'})
store.dispatch({type:'DECREMENT'})
store.dispatch({type:'ODD_INCREMENT'})

// store.dispatch({type:null})




