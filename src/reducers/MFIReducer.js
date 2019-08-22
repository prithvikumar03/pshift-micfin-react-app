
import {
    FETCH_ALL_MFIS,
    FETCH_MFI_FAILURE,
    FETCH_MFI_SUCCESS,
    REGISTER_MFI,
    REGISTER_MFI_SUCCESS,
    REGISTER_MFI_FAILURE
} from './../actions/MFIActions';

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
                error: null
            };
        case REGISTER_MFI_FAILURE:
            return {
                ...state,
                mfi: null,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

