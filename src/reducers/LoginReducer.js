
import {
    LOGIN_USER,
    LOGOUT_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
} from '../actions/LoginActions';

import {
    NOTIFICATION_ON,
    NOTIFICATION_OFF,
} from './../actions/NotificationActions';


const initialState = {
    user: {
        dbsId: "",
        mfiId: "",
        meId:"",
        userId:"",
        userGroup:"",
        entitlementLevel: "",
    },
    isLoading: false,
    error: null
};

export default function loginReducer(state = initialState, action) {
    console.log('Inside loginReducer with action '+action.type);
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case LOGOUT_USER:
            return {
                ...state,
                user:action.payload,
                isLoading: true,
                error: null
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                message:action.message,
                error: null
            };
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                user: null,
                isLoading: false,
                error: action.payload
            };
        case NOTIFICATION_ON:
                return {
                    ...state,
                    open:true
                };
        case NOTIFICATION_OFF:
                return {
                    ...state,
                    error: "",
                    open:false
                };      
        default:
            return state;
    }
}

