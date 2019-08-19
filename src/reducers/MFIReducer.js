
import {
    FETCH_ALL_MFIS,
    FETCH_MFI_FAILURE,
    FETCH_MFI_SUCCESS,
    REGISTER_MFI,
    REGISTER_MFI_SUCCESS,
    REGISTER_MFI_FAILURE
} from './../actions/MFIActions';

const initialState = {
    MFIs: [],
    isLoading: false,
    error: null
};

export default function mfiReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_MFIS:
            return {
                ...state,
                // whenever we want to fetch the MFI, set isLoading to true to show a spinner
                isLoading: true,
                error: null
            };
        case FETCH_MFI_SUCCESS:
            return {
                MFI: action.payload,
                // whenever the fetching finishes, we stop showing the spinner and then show the data
                isLoading: false,
                error: null
            };
        case FETCH_MFI_FAILURE:
            return {
                MFI: null,
                isLoading: false,
                // same as FETCH_MFI_SUCCESS, but instead of data we will show an error message
                error: action.payload
            };
        default:
            return state;
    }
}


export function registerMFIReducer(state = initialState, action) {
    //alert('inside reducer '+action);
    console.log('Inside registerMFIReducer with action '+action);
    switch (action.type) {
        case REGISTER_MFI:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case REGISTER_MFI_SUCCESS:
            return {
                MFI: action.payload,
                isLoading: false,
                error: null
            };
        case REGISTER_MFI_FAILURE:
            return {
                MFI: null,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

