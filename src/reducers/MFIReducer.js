
import {
    FETCH_ALL_MFIS,
    FETCH_MFI_FAILURE,
    FETCH_MFI_SUCCESS,
    REGISTER_MFI,
    REGISTER_MFI_SUCCESS,
    REGISTER_MFI_FAILURE
} from './../actions/MFIActions';

import {
    NOTIFICATION_ON,
    NOTIFICATION_OFF,
} from './../actions/NotificationActions';


const initialState = {
    mfi: {
        mfiId: '',
        companyName: "",
        directorName: ""
    },
    MFIs: [],
    isLoading: false,
    error: null
};

export default function mfiReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_MFIS:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_MFI_SUCCESS:
            return {
                ...state,
                mfi: action.payload,
                isLoading: false,
                error: null
            };
        case FETCH_MFI_FAILURE:
            return {
                ...state,
                mfi: null,
                isLoading: false,
                error: action.payload
            };
        case REGISTER_MFI:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case REGISTER_MFI_SUCCESS:
            return {
                ...state,
                mfi: action.payload,
                isLoading: false,
                error: null,
                message:action.message,
                open:true
            };
        case REGISTER_MFI_FAILURE:
            return {
                ...state,
                mfi: null,
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

