export const LOAN_REPAYMENT = 'LOAN_REPAYMENT';
export const LOAN_REPAYMENT_SUCCESS = 'LOAN_REPAYMENT_SUCCESS';
export const LOAN_REPAYMENT_FAILURE = 'LOAN_REPAYMENT_FAILURE';

export const loanRepaymentAction = (microentrepreneur) => ({
    type: LOAN_REPAYMENT,
    payload: microentrepreneur      
});

export const loanRepaymentSuccess = (microentrepreneur) => ({
    type:  LOAN_REPAYMENT_SUCCESS,
    payload: microentrepreneur,
    message:"Loan repayment is successful."
});

export const loanRepaymentFailure = (error) => ({
    type:  LOAN_REPAYMENT_FAILURE,
    payload: error
});
