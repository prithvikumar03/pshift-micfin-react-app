/* export const FETCH_ALL_MFIS = 'FETCH_ALL_MFIS';
export const FETCH_MFI_SUCCESS = 'FETCH_MFI_SUCCESS';
export const FETCH_MFI_FAILURE = 'FETCH_MFI_FAILURE'; */

export const REGISTER_LOAN = 'REGISTER_LOAN';
export const REGISTER_LOAN_SUCCESS = 'REGISTER_LOAN_SUCCESS';
export const REGISTER_LOAN_FAILURE = 'REGISTER_LOAN_FAILURE';


/* export const fetchMFI = () => ({
    type: FETCH_ALL_MFIS,
});

export const fetchMFISuccess = (MFI) => ({
    type: FETCH_MFI_SUCCESS,
    payload: MFI
});

export const fetchMFIFailure = (message) => ({
    type: FETCH_MFI_FAILURE,
    payload: message
}); */

export const registerLoan = (loan) => ({
    type: REGISTER_LOAN,
    payload: loan
});

export const registerLoanSuccess = (loan) => ({
    type:  REGISTER_LOAN_SUCCESS,
    payload: loan,
    message: "Loan applied successfully."
});

export const registerLoanFailure = (error) => ({
    type:  REGISTER_LOAN_FAILURE,
    payload: error,
    message: "Loan application failed !"
});