import { loadStateFromLocalStorge } from '../Storage';


let initialState = {
    
    usersArray:[
        {
            id:1,
            username:'User_1',
            age:30, 
            password:'12345'
        }
    ],
    
    logedIn: false,
    logedUser: {}
}





let defaultState = loadStateFromLocalStorge()

if (defaultState === null){
    console.log('Empty LocalStorge');
    
}else{
    initialState = defaultState;
    console.log(initialState);
}






const usersReducer = (state = initialState, action) =>{
    // action = Object { type: "REGISTER_ACTION", userinfo: {…} }
switch(action.type){

    case 'REGISTER_ACTION':
        let newUserArray = [...state.usersArray];
        let newID = newUserArray.length + 1; 
        let newUser = {
            ...action.userinfo,
            id: newID
        }     

        newUserArray.push(newUser)

        return({
            usersArray: newUserArray,
            logedIn: true,
            logedUser: newUser
        })


    case 'LOGIN_ACTION':
            let success = false;
            let logedUser = {};
            state.usersArray.forEach((user) =>{
        if( user.username === action.username &&  user.password === action.password ){
            success = true;
            logedUser = user;
            alert('Success')
        }
        })
        
        return {
            ...state,
            logedIn: success,
            logedUser:logedUser
        }

    case 'LOGOUT_ACTION':
        return({
            ...state,
            logedIn : false,
            logedUser: {}
        })
    

    default: 
        return state;
    }
}
export default usersReducer;
