export const TRANSACTIONS_FETCH = 'TRANSACTIONS_FETCH';
export const TRANSACTIONS_FETCH_SUCCESS = 'TRANSACTIONS_FETCH_SUCCESS';
export const TRANSACTIONS_FETCH_FAILURE = 'TRANSACTIONS_FETCH_FAILURE';


export const fetchTransactions = () => ({
    type: TRANSACTIONS_FETCH,
});

export const fetchTransactionsSuccess = (microentrepreneurs) => ({
    type:  TRANSACTIONS_FETCH_SUCCESS,
    payload: microentrepreneurs
});

export const fetchTransactionsFailure = (error) => ({
    type:  TRANSACTIONS_FETCH_FAILURE,
    payload: error
});

