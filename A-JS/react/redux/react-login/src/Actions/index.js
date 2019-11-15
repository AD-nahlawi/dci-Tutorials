

export const saveRegistration = (userinfo) => {
    return({
        type:'REGISTER_ACTION',
        userinfo
        
    })
}

export const checkLogin = (username, password) => {
    return({
        type:'LOGIN_ACTION',
        username,
        password
    })
}

export const logout = () => {
    return({
        type:'LOGOUT_ACTION'
    })
}

