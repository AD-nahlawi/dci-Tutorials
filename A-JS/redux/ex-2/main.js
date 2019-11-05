const redux = require('redux');
const createStore = redux.createStore;

// the Default Object Of The store
const default_Object = {
    name: 'Farhan',
    address: 'Breline',
    job: 'developer'
}



// reducer for redux   // Update The Default Object As An Copy
const reducer = (state = default_Object, action) => {
    if(action.type === 'CHANGE_NAME'){
        return ({
            ...state,
            name: action.value
        })
    }
    if(action.type === 'CHANGE_ADDRESS'){
        return ({
            ...state,
            address: action.value
        })
    }
    return state;
}
const copy_From_default_Object = createStore(reducer);


copy_From_default_Object.subscribe(() =>{
    console.log('Object has been updated to : ', copy_From_default_Object.getState());
})


// Distatch Actions
copy_From_default_Object.dispatch({
    type: 'CHANGE_NAME',
    value: 'Mansour'
})


copy_From_default_Object.dispatch({
    type: 'CHANGE_ADDRESS',
    value: 'Hamburg'
})




