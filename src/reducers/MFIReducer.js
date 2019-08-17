/* import {
    FETCH_MFI,
    FETCH_MFI_FAILURE,
    FETCH_MFI_SUCCESS
} from './../actions/MFIActions';

const initialState = {
    MFI: [],
    isLoading: false,
    error: null
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MFI:
            return {
                ...state,
                // whenever we want to fetch the MFI, set isLoading to true to show a spinner
                isLoading: true,
                error: null
            };
        case FETCH_MFI_SUCCESS:
            return {
                MFI: [...action.payload],
                // whenever the fetching finishes, we stop showing the spinner and then show the data
                isLoading: false,
                error: null
            };
        case FETCH_MFI_FAILURE:
            return {
                MFI: [],
                isLoading: false,
                // same as FETCH_MFI_SUCCESS, but instead of data we will show an error message
                error: action.payload
            };
        default:
            return state;
    }
} */