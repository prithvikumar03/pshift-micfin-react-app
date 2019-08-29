import {
    TRANSACTIONS_FETCH,
    TRANSACTIONS_FETCH_SUCCESS,
    TRANSACTIONS_FETCH_FAILURE,
} from '../actions/TransactionsActions';

const initialState ={
    transactions:  {
       
    },
    isLoading: false,
    error: null
};

export function transactionsReducer(state = initialState, action) {
    console.log('Inside transactionsReducer with action '+action.type);
    switch (action.type) {
      
        case TRANSACTIONS_FETCH:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case TRANSACTIONS_FETCH_SUCCESS:
            return {
                ...state,
                transactions: action.payload,
                isLoading: false,
                error: null
            };
        case TRANSACTIONS_FETCH_FAILURE:
            return {
                ...state,
                transactions: null,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

