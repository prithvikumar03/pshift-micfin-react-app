import {
    REGISTER_ME,
    REGISTER_ME_SUCCESS,
    REGISTER_ME_FAILURE,
    FETCH_ALL_ENTREPRENEURS,
    FETCH_ALL_ENTREPRENEURS_SUCCESS,
    FETCH_ALL_ENTREPRENEURS_FAILURE
} from './../actions/MEActions';

const initialState ={
    microentrepreneur: {
        meId:''
    },
    microentrepreneurs:[],
    isLoading: false,
    error: null
};

export function microEntrepreneurReducer(state = initialState, action) {
    console.log('Inside registerMEReducer with action '+action.type);
    switch (action.type) {
        case FETCH_ALL_ENTREPRENEURS:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_ALL_ENTREPRENEURS_SUCCESS:
            return {
                ...state,
                microentrepreneurs: action.payload,
                isLoading: false,
                error: null
            };
        case FETCH_ALL_ENTREPRENEURS_FAILURE:
            return {
                ...state,
                microentrepreneurs: null,
                isLoading: false,
                error: action.payload
            };
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

