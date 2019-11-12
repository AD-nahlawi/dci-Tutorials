const initialState = {
    usersArray:[
        {
            id:1,
            username:'Peter',
            age:30, 
            password:'peter12345'
        },
        {
            id:2,
            username:'dcistudent',
            age:33, 
            password:'dci123'
        }
    ],
    logedIn: false,
    logedUser: {}
}

const usersReducer = (state = initialState, action) =>{
    switch(action.type){

    case 'LOGIN_ACTION':
        let success = false;
        let logedUser = {};
        state.usersArray.forEach((user) =>{
            if( user.username === action.username &&  user.password === action.password ){
                success = true;
                logedUser = user;
            }
        })
    return {
        ...state,
        logedIn: success,
        logedUser:logedUser
    }


    case 'REGISTER_ACTION':
        let newUserArray = [...state.usersArray];
        let newID = newUserArray.length + 1;
        let newUser = {
            id: newID,
            ...action.userinfo
        }
        newUserArray.push(newUser)
        return({
            usersArray: newUserArray,
            logedIn: true,
            logedUser: newUser
        })
    case 'LOGOUT_ACTION':
        return({
            ...state,
            logedIn : false,
            logedUser: {}
        })
    
    default: 
    return state
    }
}
export default usersReducer;
