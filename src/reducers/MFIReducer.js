
import {
    FETCH_ALL_MFIS,
    FETCH_MFI_FAILURE,
    FETCH_MFI_SUCCESS
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