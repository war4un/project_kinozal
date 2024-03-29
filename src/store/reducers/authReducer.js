const initState = {
    authError: null
}


const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR' :
            console.log('ошибка');
            return {
                ...state,
                authError: 'Что то пошло не так('
            }
        case 'LOGIN_SUCCESS' :
            console.log('Успешно вошли');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state,
                authError: action.err
            }
        default :
        return state;
    }
}

export default authReducer