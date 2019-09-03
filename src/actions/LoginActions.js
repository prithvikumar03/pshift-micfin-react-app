export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';


export const loginUser = (user) => ({
    type:LOGIN_USER,
    payload:user
});

export const loginUserSuccess = (user) => ({
    type:  LOGIN_USER_SUCCESS,
    payload: user,
    message: "SUCCESS"
});

export const loginUserFailure = (error) => ({
    type:  LOGIN_USER_FAILURE,
    payload: error
});


