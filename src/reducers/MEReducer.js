import {
    REGISTER_ME,
    REGISTER_ME_SUCCESS,
    REGISTER_ME_FAILURE
} from './../actions/MEActions';

const initialState ={
    microentrepreneur: null,
    isLoading: false,
    error: null
};



export function registerMEReducer(state = initialState, action) {
    //alert('inside reducer '+action);
    console.log('Inside registerMEReducer with action '+action);
    switch (action.type) {
        case REGISTER_ME:
            return {
                ...state,
                isLoading: true,
                microentrepreneur: action.payload,
                error: null
            };
        case REGISTER_ME_SUCCESS:
            return {
                ...state,
                microentrepreneur: action.payload,
                isLoading: false,
                error: null
            };
        case REGISTER_ME_FAILURE:
            return {
                ...state,
                microentrepreneur: null,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

