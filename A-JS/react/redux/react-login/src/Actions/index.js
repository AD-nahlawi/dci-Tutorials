export const checkLogin = (username, password) => {
    return({
        type:'LOGIN_ACTION',
        username,
        password
    })
}

export const saveRegistration = (userinfo) => {
    console.log('the user info is: ' + userinfo.age)
    return({
        type:'REGISTER_ACTION',
        userinfo
        
    })
}

export const logout = () => {
    return({
        type:'LOGOUT_ACTION'
    })
}

